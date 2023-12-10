/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep(seconds) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve("You can move forward now!");
    }, seconds * 1000);
  });
}

async function wakeupAfter(seconds) {
  console.log("task1");
  console.log("task2");
  console.log(`promise after ${seconds}`, await sleep(seconds));
  console.log("task3");
  console.log("task4");
}

wakeupAfter(3);
