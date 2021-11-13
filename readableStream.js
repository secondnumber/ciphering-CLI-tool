const {Readable} = require('stream');
const fs = require('fs');
const path = require("path");
const {cipher} = require("./cipher");
const { stdin, stdout, stderr } = process;

class ReadableStream extends Readable {
    constructor(source) {
        super(source);
        this.source = source;
    }
    _read(size) {
        fs.readFile(
            path.join(__dirname, this.source),
            'utf-8',
            (err, data) => {
                if (err) {
                    stderr.write('Input file not exist, please, pass the correct input\n');
                    process.exit(1);
                } else {
                    this.push(data)
                }
            }
        );
    }
}

module.exports = {
    ReadableStream: ReadableStream,
};