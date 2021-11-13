const {parseCondition} = require("./parseCmdCondition");
const {configValidation} = require("./configValidation");
const { stdin, stdout, exit, argv, stderr } = process;
const {TransformStream} = require('./transformStream');
const { WritableStream } = require('./writableStream');
const { ReadableStream } = require('./readableStream');
const stream = require('stream');



const config = parseCondition(argv, '-c');
const input = parseCondition(argv, '-i');
const output = parseCondition(argv, '-o');

const MyTransformStream1 = new TransformStream('C1');
const MyTransformStream2 = new TransformStream('C1');
const MyTransformStream3 = new TransformStream('C1');
const MyReadableStream = new ReadableStream(input);
const MyWritableStream = new WritableStream(output);
const TransformsArray = [MyTransformStream1, MyTransformStream2, MyTransformStream3]


if (!config) {
    stderr.write('Empty config or absent config flag, please, pass the correct config\n');
    exit(3);
}

configValidation(config)

//MyReadableStream.pipe(MyTransformStream1).pipe(MyWritableStream)
stream.pipeline(
    MyReadableStream,
    ...TransformsArray,
    MyWritableStream,
    (err) => {
        if (err) {
            console.error('Pipeline failed.', err);
        }
    }
);

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



