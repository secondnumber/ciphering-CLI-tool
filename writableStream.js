const {Writable} = require('stream');
const fs = require('fs');

class WritableStream extends Writable {
    constructor(options) {
        super(options);
        this.options = options;
    }

    _write(chunk, encoding, callback) {
        fs.writeFile(this.options, chunk, (err) => {
            if (err) throw err;
            console.log(chunk.toString());
        });
    }
}

module.exports = {
    WritableStream: WritableStream,
};