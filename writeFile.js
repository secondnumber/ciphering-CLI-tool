const fs = require("fs");

module.exports.handlerWriteFile = (output, chipherData) => {
            fs.writeFile(output, `${chipherData}`, {flag: "a"}, (err) => {
                if (err) {
                    console.log(err.message);
                }
            })

}