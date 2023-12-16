/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(undefined);
    }, n * 1000);
  });
}

const result = wait(6);
result.then(function (data) {
  console.log(data);
});

module.exports = wait;
