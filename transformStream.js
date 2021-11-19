const stream = require("stream");
const { chooseCipher } = require("./ciphers/cipher");

class TransformStream extends stream.Transform {
  constructor(options = {}) {
    super(options);
    this.options = options;
  }

  _transform(chunk, encoding, callback) {
    this.push(chooseCipher(chunk.toString(), this.options));
    callback();
  }
}

module.exports = {
  TransformStream: TransformStream,
};
