const { stderr, exit } = process;

module.exports.parseCondition = (args, flag) => {
    const argsArray = args.filter((el) => el === flag);
    if (argsArray.length > 1) {
        stderr.write(`Your arguments are duplicated\n`)
        exit(2);
    }
    const parameterPosition = args.slice(2).indexOf(flag);
    if (parameterPosition !== -1) {
        return args.slice(2)[parameterPosition + 1];
    } else return null;
}