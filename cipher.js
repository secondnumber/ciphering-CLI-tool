const { caesarCipher } = require("./caesarCipher");
const { rotCipher } = require("./rotCipher");
const { atbashCipher } = require("./atbashCipher");

module.exports.chooseCipher = (data, config) => {
  let chipherData = data;
  if (config === "C1") {
    chipherData = caesarCipher(chipherData);
  } else if (config === "C0") {
    chipherData = caesarCipher(chipherData, true);
  } else if (config === "R1") {
    chipherData = rotCipher(chipherData);
  } else if (config === "R0") {
    chipherData = rotCipher(chipherData, true);
  } else if (config === "A") {
    chipherData = atbashCipher(chipherData, true);
  }
  return chipherData;
};
