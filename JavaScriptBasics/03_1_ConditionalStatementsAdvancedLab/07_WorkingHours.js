function printIsTheOfficeOpen(input) {
  let hour = Number(input[0]);
  let weekDay = input[1];

  if (
    hour >= 10 &&
    hour <= 18 &&
    (weekDay === "Monday" ||
      weekDay === "Tuesday" ||
      weekDay === "Wednesday" ||
      weekDay === "Thursday" ||
      weekDay === "Friday" ||
      weekDay === "Saturday")
  ) {
    console.log("open");
  } else {
    console.log("closed");
  }
}

printIsTheOfficeOpen(["19", "Friday"]);
