function printProductPrice(input) {
  let fruit = input[0];
  let weekDay = input[1];
  let quantity = Number(input[2]);

  let fruitPrice = 0;

  if (
    weekDay === "Monday" ||
    weekDay === "Tuesday" ||
    weekDay === "Wednesday" ||
    weekDay === "Thursday" ||
    weekDay === "Friday"
  ) {
    switch (fruit) {
      case "banana":
        fruitPrice = 2.50;
        break;
      case "apple":
        fruitPrice = 1.20;
        break;
      case "orange":
        fruitPrice = 0.85;
        break;
      case "grapefruit":
        fruitPrice = 1.45;
        break;
      case "kiwi":
        fruitPrice = 2.70;
        break;
      case "pineapple":
        fruitPrice = 5.50;
        break;
      case "grapes":
        fruitPrice = 3.85;
        break;
    }
  } else if (weekDay === "Sunday" || weekDay === "Saturday") {
    switch (fruit) {
      case "banana":
        fruitPrice = 2.70;
        break;
      case "apple":
        fruitPrice = 1.25;
        break;
      case "orange":
        fruitPrice = 0.90;
        break;
      case "grapefruit":
        fruitPrice = 1.60;
        break;
      case "kiwi":
        fruitPrice = 3.00;
        break;
      case "pineapple":
        fruitPrice = 5.60;
        break;
      case "grapes":
        fruitPrice = 4.20;
        break;
    }
  }

  let finalPrice = fruitPrice * quantity;

  fruitPrice === 0 ? console.log("error") : console.log(finalPrice.toFixed(2));
}

printProductPrice(["pineapple", "Wednesday", "1.600"]);
