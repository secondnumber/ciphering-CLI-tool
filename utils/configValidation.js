const { stderr } = process;

module.exports.configValidation = (config) => {
  const allowedValues = ["C1", "C0", "R1", "R0", "A"];
  const wrongValues = config.split("-").filter(function (i) {
    return allowedValues.indexOf(i) < 0;
  });
  if (wrongValues && wrongValues.length > 0) {
    stderr.write("Invalid config, please, pass the correct config\n");
    process.exit(2);
  } else return null;
};
