const {caesarCipher} = require("./caesarCipher");
const {rotCipher} = require("./rotCipher");
const {atbashCipher} = require("./atbashCipher");

module.exports.cipher = (data, config) => {
    let chipherData = data;
    console.log(chipherData)
    config.split('-').map((el) => {
        if (el === 'C1') {
            chipherData = caesarCipher(chipherData)
        } else if (el === 'C0') {
            chipherData = caesarCipher(chipherData, true)
        } else if (el === 'R1') {
            chipherData = rotCipher(chipherData)
        } else if (el === 'R0') {
            chipherData = rotCipher(chipherData, true)
        } else if (el === 'A') {
            chipherData = atbashCipher(chipherData, true)
        }
    })
    return chipherData;
}