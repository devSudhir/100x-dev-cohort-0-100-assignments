/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    let count = 0;
    for(const char of str){
      if(char == 'A' || char == 'a' || char == 'E' 
        || char == 'e' || char == 'I' || char == 'i' 
        || char == 'O' || char == 'o' || char == 'U' 
        || char == 'u'){
          count++;
      }
    }
    return count;
}
module.exports = countVowels;