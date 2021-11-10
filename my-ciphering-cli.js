const {parseCondition} = require("./parseCmdCondition");
const {handlerReadFile} = require("./readFile");
const {handlerWriteFile} = require("./writeFile");
const {cipher} = require("./cipher");
const {configValidation} = require("./configValidation");
const { stdin, stdout, exit, argv, stderr } = process;
const fs = require("fs");

const config = parseCondition(argv, '-c');
const input = parseCondition(argv, '-i');
const output = parseCondition(argv, '-o');

if (!config) {
    stderr.write('Empty config or absent config flag, please, pass the correct config\n');
    exit(3);
}
configValidation(config)

if (input) {
    try {
        fs.statSync(input);
        handlerReadFile(input, output, config, handlerWriteFile);
    } catch (err) {
        stderr.write('Input file not exist, please pass the correct input\n');
        exit(1);
    }
} else if (!input && output) {
    try {
        fs.statSync(output);
        stdout.write('Please, type your text for ciphering:\n');
        stdin.on('data', data => {
            handlerWriteFile(output, cipher(data.toString(), config));
        });
    } catch (err) {
        stderr.write('Output file not exist, please pass the correct output\n');
        exit(1);
    }
}



