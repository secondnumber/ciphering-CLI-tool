const fs = require("fs");
const path = require("path");
const {cipher} = require('./cipher');
const { stdin, stdout, exit, argv, stderr } = process;

module.exports.handlerReadFile = (input, output, config, myWriteFile) => {
    fs.readFile(
        path.join(__dirname, input),
        'utf-8',
        (err, data) => {
            if (err) {
                stderr.write('Input file not exist');
                process.exit(1);
            }
            if (output) {
                myWriteFile(output, cipher(data, config))
            } else {
                stdout.write(`${cipher(data, config)}\n`);
            }
        }
    );

}