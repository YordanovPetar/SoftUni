function printVacationExpences(peopleGroup, groupType, weekDay) {
  let singlePersonPrice = 0;
  let totalPrice = 0;

  if (groupType === "Students") {
    if (weekDay === "Friday") {
      singlePersonPrice = 8.45;
    } else if (weekDay === "Saturday") {
      singlePersonPrice = 9.8;
    } else if (weekDay === "Sunday") {
      singlePersonPrice = 10.46;
    }

    totalPrice = peopleGroup * singlePersonPrice;

    if (peopleGroup >= 30) {
      totalPrice = totalPrice - (totalPrice * 0.15);
    }

  } else if (groupType === "Business") {
    if (weekDay === "Friday") {
      singlePersonPrice = 10.9;
    } else if (weekDay === "Saturday") {
      singlePersonPrice = 15.6;
    } else if (weekDay === "Sunday") {
      singlePersonPrice = 16;
    }

    totalPrice = peopleGroup * singlePersonPrice;

    if (peopleGroup >= 100) {
        totalPrice = totalPrice - (10 * singlePersonPrice);
    }

  } else if (groupType === "Regular") {
    if (weekDay === "Friday") {
      singlePersonPrice = 15;
    } else if (weekDay === "Saturday") {
      singlePersonPrice = 20;
    } else if (weekDay === "Sunday") {
      singlePersonPrice = 22.5;
    }

    totalPrice = peopleGroup * singlePersonPrice;

    if (peopleGroup >= 10 && peopleGroup <= 20) {
        totalPrice = totalPrice - (totalPrice * 0.05);
    }

  }

  console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

printVacationExpences(30, "Students", "Sunday");
