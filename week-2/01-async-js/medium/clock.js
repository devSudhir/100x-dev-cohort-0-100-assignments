function clock(formatter) {
  setInterval(function () {
    const date = new Date();
    formatter(
      date.getHours().toString(),
      date.getMinutes().toString(),
      date.getSeconds().toString()
    );
  }, 1000);
}

function clock24(hour, minute, second) {
  console.log(
    `${hour.padStart(2, "0")}:${minute.padStart(2, "0")}:${second.padStart(
      2,
      "0"
    )}`
  );
}

function clock12(hour, minute, second) {
  let identifier = "AM";
  if (hour > 12) {
    identifier = "PM";
    hour -= 12;
  }
  console.log(
    `${hour.toString().padStart(2, "0")}:${minute.padStart(
      2,
      "0"
    )}:${second.padStart(2, "0")} ${identifier}`
  );
}

clock(clock24);
clock(clock12);
