function printHotelRoomExpences(input) {
  let month = input[0];
  let nightsCount = Number(input[1]);
  let studioCost = 0;
  let apartmentCost = 0;
  let discountStudio = 0;
  let discountApartment = 0;

  if (nightsCount > 14) {
    discountApartment = 0.10;
  }

  switch (month) {
    case "May":
    case "October":
      studioCost = 50;
      apartmentCost = 65;

      if (nightsCount > 7 && nightsCount <= 14) {
        discountStudio = 0.05;
      } else if (nightsCount > 14) {
        discountStudio = 0.3;
      }

      break;
    case "June":
    case "September":
      studioCost = 75.2;
      apartmentCost = 68.7;

      if (nightsCount > 14) {
        discountStudio = 0.2;
      }

      break;
    case "July":
    case "August":
      studioCost = 76;
      apartmentCost = 77;
      break;
  }

  let studioFinalCost = studioCost * nightsCount;
  studioFinalCost = (studioFinalCost - (studioFinalCost * discountStudio)).toFixed(2);

  let apartmentFinalCost = apartmentCost * nightsCount;
  apartmentFinalCost = (apartmentFinalCost - (apartmentFinalCost * discountApartment)).toFixed(2);

  console.log(`Apartment: ${apartmentFinalCost} lv.`);
  console.log(`Studio: ${studioFinalCost} lv.`);
}

printHotelRoomExpences(["May", "7"]);
