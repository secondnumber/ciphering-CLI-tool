const { Readable } = require("stream");
const fs = require("fs");
const path = require("path");
const { stdin, stderr } = process;

class ReadableStream extends Readable {
  constructor(source) {
    super(source);
    this.source = source;
  }
  _read(size) {
    if (!this.source) {
      stdin.on("data", (data) => {
        this.push(data.toString());
        stdin.pause();
      });
    } else if (this.source) {
      fs.readFile(path.join(__dirname, this.source), "utf-8", (err, data) => {
        if (err) {
          stderr.write(
            "Input file not exist, please, pass the correct input\n"
          );
        }
        if (!data) {
          stderr.write("No data in input file, please, pass the data\n");
        } else {
          this.push(data);
        }
      });
    }
  }
}

module.exports = {
  ReadableStream: ReadableStream,
};
