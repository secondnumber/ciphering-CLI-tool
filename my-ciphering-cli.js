const {parseCondition} = require("./parseCmdCondition");
const {handlerReadFile} = require("./readFile");
const {handlerWriteFile} = require("./writeFile");
const {cipher} = require("./cipher");
const {configValidation} = require("./configValidation");
const { stdin, stdout, exit, argv, stderr } = process;
const fs = require("fs");
const stream = require('stream');

const { Readable } = require('stream');

class ReadableStream extends Readable {
    constructor(opt) {
        super(opt);
    }

    _read(size) {}
}

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

const config = parseCondition(argv, '-c');
const input = parseCondition(argv, '-i');
const output = parseCondition(argv, '-o');

const MyTransformStream = new TransformStream(config.toString()) ;
const MyReadableStream = new ReadableStream();



if (!config) {
    stderr.write('Empty config or absent config flag, please, pass the correct config\n');
    exit(3);
}
configValidation(config)

const readStream = fs.createReadStream(input, {encoding: 'utf8'});
const writeStream = fs.createWriteStream(output, {encoding: 'utf8'});
readStream.pipe(MyTransformStream).pipe(writeStream)

/*if (input) {
    try {
        const readStream = fs.createReadStream(input, {encoding: 'utf8'});
        const writeStream = fs.createWriteStream(output, {encoding: 'utf8'});
        readStream.on('data', chunk => handlerReadFile(input, output, config, handlerWriteFile));
        readStream.on('end', () => console.log('end'))
        readStream.on('error', (error) => {
            stderr.write('Input file not exist, please pass the correct input\n');
        })
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
}*/



