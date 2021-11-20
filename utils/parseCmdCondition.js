const fs = require("fs");
const { stderr} = process;

module.exports.parseCondition = (args, flag) => {
    if (flag && flag.length > 1) {
      stderr.write(`Your arguments are duplicated\n`)
    }
    if (flag && flag.length === 1 && args) {
      const parameterPosition = args.slice(2).indexOf(flag[0]);
      if (parameterPosition !== -1) {
        if (flag[0] === "-o" || flag[0] === "--output") {
          fs.stat(args.slice(2)[parameterPosition + 1], (err) => {
            if (err) {
              stderr.write(
                  "Output file not exist, please, pass the correct output\n"
              );
            }
          });
        }
        return args.slice(2)[parameterPosition + 1];
      } else return null;
    }
};
