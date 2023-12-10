/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
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
  const dataFromPromise1 = await waitOneSecond();
  const dataFromPromise2 = await waitTwoSecond();
  const dataFromPromise3 = await waitThreeSecond();
  console.log(
    dataFromPromise1,
    ">>>",
    dataFromPromise2,
    ">>>",
    dataFromPromise3
  );
  const endAt = new Date().getTime();
  console.log(`Time taken ${endAt - beginAt} ms`);
}

calculateTime();
