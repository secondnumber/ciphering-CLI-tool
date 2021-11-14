const { Writable } = require("stream");
const fs = require("fs");
const { stderr, stdout, exit } = process;

class WritableStream extends Writable {
  constructor(options) {
    super(options);
    this.options = options;
  }

  _write(chunk, encoding, callback) {
    if (!this.options) {
      stdout.write(`${chunk.toString()}\n`);
      exit();
    }
    fs.writeFile(
      this.options,
      `${chunk.toString()}\n`,
      { flag: "a" },
      (err, chunk) => {
        if (err) throw err;
      }
    );
  }
}

module.exports = {
  WritableStream: WritableStream,
};
