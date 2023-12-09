/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
  let result = numbers[0];
  let left = 1;
  let right = numbers.length - 1;

  while (left <= right) {
    result = Math.max(Math.max(numbers[left++], numbers[right--]), result);
  }

  return result;
}

module.exports = findLargestElement;
