const { Readable } = require("stream");
const fs = require("fs");
const path = require("path");
const { stdin, stderr, exit } = process;

class ReadableStream extends Readable {
  constructor(source) {
    super(source);
    this.source = source;
  }
  _destroy(error, callback) {
    super._destroy(error, callback);
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
          process.exit(6);
        }
        if (!data) {
          stderr.write("No data in input file, please, pass the data\n");
          process.exit(9);
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
