const {Writable} = require('stream');
const fs = require('fs');
const { stderr, stdout } = process;

class WritableStream extends Writable {
    constructor(options) {
        super(options);
        this.options = options;
    }

    _write(chunk, encoding, callback) {
        if (!this.options) {
            stdout.write(`${chunk.toString()}\n`)
            process.exit()
        }
        fs.access(this.options, fs.constants.F_OK, (err) => {
            if (err) {
                stderr.write('Output file not exist, please, pass the correct output\n');
            }
        });
        fs.writeFile(this.options, `${chunk.toString()}\n`, {flag: "a"}, (err, chunk) => {
                if (err) throw err;
            });
        }

}

module.exports = {
    WritableStream: WritableStream,
};