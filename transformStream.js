const stream = require('stream');
const {cipher} = require('./cipher');

class TransformStream extends stream.Transform {
    constructor(options = {}) {
        super(options);
        this.options = options;
    }

    _transform(chunk, encoding, callback) {
        this.push(cipher(chunk.toString(), this.options));
        callback();
    }
}

module.exports = {
    TransformStream: TransformStream,
};