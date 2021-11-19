const { parseCondition } = require("./utils/parseCmdCondition");
const { configValidation } = require("./utils/configValidation");
const { exit, argv, stderr } = process;
const { TransformStream } = require("./transformStream");
const { WritableStream } = require("./writableStream");
const { ReadableStream } = require("./readableStream");
const stream = require("stream");

const configKey = argv.filter((el) => {
  return el === "-c" || el === "--config";
});
const inputKey = argv.filter((el) => {
  return el === "-i" || el === "--input";
});
const outputKey = argv.filter((el) => {
  return el === "-o" || el === "--output";
});
const config = parseCondition(argv, configKey);
const input = parseCondition(argv, inputKey);
const output = parseCondition(argv, outputKey);

const MyReadableStream = new ReadableStream(input);
const MyWritableStream = new WritableStream(output);

if (!config) {
  stderr.write(
    "Empty config or absent config flag, please, pass the correct config\n"
  );
  exit(3);
}

configValidation(config);

const TransformsArray = [];
config.split("-").map((el) => TransformsArray.push(new TransformStream(el)));

stream.pipeline(
  MyReadableStream,
  ...TransformsArray,
  MyWritableStream,
  (err) => {
    if (err) {
      console.error("Pipeline failed.", err);
      exit(3);
    }
  }
);
