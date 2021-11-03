const fs = require("fs");
const path = require("path");
const {parseCondition} = require("./parseCmdCondition");
const { stdin, stdout, exit, argv } = process;

filePath = path.join(__dirname, "", "out.txt");

fs.writeFile(filePath, "Hello", (err) => {
  if (err) {
    throw err;
  }
});

/*stdin.on("data", function (data) {
  stdout.write("Hello, ");
  stdout.write(data);
  exit();
});*/

const config = parseCondition(argv, '-c');
const input = parseCondition(argv, '-i');
const output = parseCondition(argv, '-o');
console.log(config)
console.log(input)
console.log(output)
