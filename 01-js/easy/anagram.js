/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if (str1.length != str2.length) {
    return false;
  }

  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  let obj1 = {};

  for (const char of str1) {
    if (obj1[char]) {
      obj1[char] = obj1[char] + 1;
    } else {
      obj1[char] = 1;
    }
  }

  let obj2 = {};

  for (const char of str2) {
    if (obj2[char]) {
      obj2[char] = obj2[char] + 1;
    } else {
      obj2[char] = 1;
    }
  }

  for (const key of Object.keys(obj1)) {
    if (obj1[key] != obj2[key]) {
      return false;
    }
  }
  return true;
}

module.exports = isAnagram;
