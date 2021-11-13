const { stderr } = process;

module.exports.parseCondition = (args, flag) => {
    if (flag.length > 1) {
        stderr.write(`Your arguments are duplicated\n`)
    }
    const parameterPosition = args.slice(2).indexOf(flag[0]);
    if (parameterPosition !== -1) {
        return args.slice(2)[parameterPosition + 1];
    } else return null;
}