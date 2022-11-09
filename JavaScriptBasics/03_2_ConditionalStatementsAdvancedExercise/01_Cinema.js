function printTicketIncomes(input) {
  let type = input[0];
  let rows = Number(input[1]);
  let columns = Number(input[2]);

  let currentTicketPrice = 0;

  switch (type) {
    case "Premiere":
      currentTicketPrice = 12.0;
      break;
    case "Normal":
      currentTicketPrice = 7.5;
      break;
    case "Discount":
      currentTicketPrice = 5.0;
      break;
  }

  let ticketIncomes = rows * columns * currentTicketPrice;
  console.log(ticketIncomes.toFixed(2) + " leva");
}

printTicketIncomes(["Normal", "21", "13"]);
