module.exports.atbashCipher = (str) => {
  if (str) {
    const arr = str.split("");
    const charArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].charCodeAt(0) >= 65 && arr[i].charCodeAt(0) <= 90) {
        charArr.push(91 - (arr[i].charCodeAt(0) + 26 - 90));
      } else if (arr[i].charCodeAt(0) >= 97 && arr[i].charCodeAt(0) <= 122) {
        charArr.push(123 - (arr[i].charCodeAt(0) + 26 - 122));
      } else charArr.push(arr[i].charCodeAt(0));
    }
    return String.fromCharCode(...charArr);
  }
};
