module.exports.rotCipher = (str, isDecode) => {
  if (str && isDecode) {
    const arr = str.split("");
    const charArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].charCodeAt(0) - 8 > 56 && arr[i].charCodeAt(0) - 8 < 65) {
        charArr.push(91 - (73 - arr[i].charCodeAt(0)));
      } else if (
        arr[i].charCodeAt(0) - 8 > 88 &&
        arr[i].charCodeAt(0) - 8 < 97
      ) {
        charArr.push(123 - (105 - arr[i].charCodeAt(0)));
      } else if (
        (arr[i].charCodeAt(0) >= 65 && arr[i].charCodeAt(0) <= 90) ||
        (arr[i].charCodeAt(0) >= 97 && arr[i].charCodeAt(0) <= 122)
      ) {
        charArr.push(arr[i].charCodeAt(0) + -8);
      } else charArr.push(arr[i].charCodeAt(0));
    }
    return String.fromCharCode(...charArr);
  }
  if (str && !isDecode) {
    const arr = str.split("");
    const charArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].charCodeAt(0) >= 83 && arr[i].charCodeAt(0) <= 90) {
        charArr.push(64 + (arr[i].charCodeAt(0) + 8 - 90));
      } else if (arr[i].charCodeAt(0) >= 115 && arr[i].charCodeAt(0) <= 122) {
        charArr.push(96 + (arr[i].charCodeAt(0) + 8 - 122));
      } else if (
        (arr[i].charCodeAt(0) >= 65 && arr[i].charCodeAt(0) <= 90) ||
        (arr[i].charCodeAt(0) >= 97 && arr[i].charCodeAt(0) <= 122)
      ) {
        charArr.push(arr[i].charCodeAt(0) + 8);
      } else charArr.push(arr[i].charCodeAt(0));
    }
    return String.fromCharCode(...charArr);
  }
};
