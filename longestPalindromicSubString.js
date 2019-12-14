// this is normal n^3 solution

function findLongestPalindromicStr(string) {
  const strLen = string.length;
  let longestLength = 0;
  for (let i = 0; i < strLen; i++) {
    for (let j = strLen; j >= i; j--) {
      let subString = string.substring(i, j);

      if (longestLength > subString.length) {
        break;
      }
      let sub = isPalindrome(subString);
      if (sub && (subString.length > longestLength) ){
        longestLength = subString.length;
        console.log("ins", sub, subString);
      }
    }
    if (longestLength === string.length) {
      break;
    }
  }
  return longestLength;
}

function isPalindrome(string) {
  let strStack = string.split("");
  let poppedStr = "";
  for (let i = 0; i < string.length; i++) {
    poppedStr += strStack.pop();
    console.log(poppedStr, strStack);
  }
  if (string == poppedStr) {
    return true;
  }
  return false;
}

console.log(findLongestPalindromicStr("abd121aba"));
