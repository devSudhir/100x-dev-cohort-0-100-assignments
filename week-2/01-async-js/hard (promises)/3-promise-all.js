/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */

function waitOneSecond() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve("one second promise");
    }, 1000);
  });
}

function waitTwoSecond() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve("two second promise");
    }, 2000);
  });
}

function waitThreeSecond() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve("three second promise");
    }, 3000);
  });
}

async function calculateTime() {
  const beginAt = new Date().getTime();
  const data = await Promise.all([
    waitOneSecond(),
    waitTwoSecond(),
    waitThreeSecond(),
  ]);
  console.log(data);
  const endAt = new Date().getTime();
  console.log(`Time taken ${endAt - beginAt} ms`);
}

calculateTime();
