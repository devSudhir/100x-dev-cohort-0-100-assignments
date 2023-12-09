/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  let left = 0;
  let right = str.length - 1;
  while(left < right){
    if(str[left++] != str[right--]){
      return false;
    }
  }
  return true;
}

module.exports = isPalindrome;
