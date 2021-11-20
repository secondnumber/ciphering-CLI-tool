const { stderr } = process;

module.exports.simpleErrorUtil = () => {
            stderr.write('err')
            process.exit(5)
    }
