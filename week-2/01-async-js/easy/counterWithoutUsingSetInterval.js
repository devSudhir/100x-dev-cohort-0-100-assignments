function counter(count) {
  if (count == 10) {
    return;
  }
  setTimeout(function () {
    console.log(count);
    counter(++count);
  }, 1000);
}

counter(1);
