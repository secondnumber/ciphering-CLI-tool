const fs = require("fs");
const { stderr, exit } = process;

module.exports.parseCondition = (args, flag) => {
  if (flag.length > 1) {
    stderr.write(`Your arguments are duplicated\n`);
    exit(5);
  }
  const parameterPosition = args.slice(2).indexOf(flag[0]);

  if (parameterPosition !== -1) {
    if (flag[0] === "-o" || flag[0] === "--output") {
      fs.stat(args.slice(2)[parameterPosition + 1], (err) => {
        if (err) {
          stderr.write(
            "Output file not exist, please, pass the correct output\n"
          );
          exit(7);
        }
      });
    }
    return args.slice(2)[parameterPosition + 1];
  } else return null;
};
