const { stdin, stdout, exit, argv } = process;

module.exports.caesarCipher = (str, isDecode) => {
    if (str && isDecode) {
        const arr = str.split('');
        const charArr = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].charCodeAt(0) === 65) {
                charArr.push(90)
            } else if (arr[i].charCodeAt(0) === 97) {
                charArr.push(122)
            } else if ((arr[i].charCodeAt(0) >= 65 && arr[i].charCodeAt(0) <=90) || (arr[i].charCodeAt(0) >= 97 && arr[i].charCodeAt(0) <=122)) {
                charArr.push(arr[i].charCodeAt(0) + -1)
            } else charArr.push(arr[i].charCodeAt(0))
        }
        return String.fromCharCode(...charArr);
    }
    if (str && !isDecode) {
        const arr = str.split('');
        const charArr = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].charCodeAt(0) === 90) {
                charArr.push(65)
            } else if (arr[i].charCodeAt(0) === 122) {
                charArr.push(97)
            } else if ((arr[i].charCodeAt(0) >= 65 && arr[i].charCodeAt(0) <=90) || (arr[i].charCodeAt(0) >= 97 && arr[i].charCodeAt(0) <=122)) {
                charArr.push(arr[i].charCodeAt(0) + 1)
            } else charArr.push(arr[i].charCodeAt(0))
        }
        return String.fromCharCode(...charArr)
    }
}