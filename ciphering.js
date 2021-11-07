const fs = require("fs");
const path = require("path");
const {parseCondition} = require("./parseCmdCondition");
const {caesarCipher} = require("./caesarCipher");
const {atbashCipher} = require("./atbashCipher");
const {rotCipher} = require("./rotCipher");
const { stdin, stdout, exit, argv } = process;

const config = parseCondition(argv, '-c');
const input = parseCondition(argv, '-i');
const output = parseCondition(argv, '-o');

fs.readFile(
    path.join(__dirname, input),
    'utf-8',
    (err, data) => {
      if (err) throw err;
        let chipherData = data;
        config.split('-').map((el) => {
            if (el === 'C1') {
                chipherData = caesarCipher(chipherData)
            } else if (el === 'C0') {
                chipherData = caesarCipher(chipherData, true)
            }        else    if (el === 'R1') {
                chipherData = rotCipher(chipherData)
            } else if (el === 'R0') {
                chipherData = rotCipher(chipherData, true)
            }  else if (el === 'A') {
                chipherData = atbashCipher(chipherData, true)
            }
        })
        fs.writeFile(output, chipherData, (err) => {
            if (err) {
                throw err;
            }
        });
    }
);


