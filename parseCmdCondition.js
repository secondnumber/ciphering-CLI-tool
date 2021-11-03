module.exports.parseCondition = (args, flag) => {
    const parameterPosition = args.slice(2).indexOf(flag);
    if (parameterPosition !== -1) {
        return args.slice(2)[parameterPosition + 1];
    } else return null;
}