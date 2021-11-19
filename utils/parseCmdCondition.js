const fs = require("fs");
const { stderr, exit } = process;

module.exports.parseCondition = (args, flag) => {
  try {
    if (flag) {
      if (flag.length > 1) {
        throw new Error(`Your arguments are duplicated\n`)
      } else {
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
        }
      }
    }
    else return null;
  } catch (e) {
    if (e.message === 'Your arguments are duplicated\n') {
      stderr.write(`Your arguments are duplicated\n`);
      exit(5);
    } else {
      throw e;
    }
  }

};
