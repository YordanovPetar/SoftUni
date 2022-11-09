function printCountReturnedCoints(input) {
    let returnedMoney = Number(input[0]);
    let countCoins = 0;

    while (returnedMoney > 0) {
        if (returnedMoney >= 2) returnedMoney -= 2;
        else if (returnedMoney >= 1) returnedMoney -= 1;
        else if (returnedMoney >= 0.50) returnedMoney -= 0.50;
        else if (returnedMoney >= 0.20) returnedMoney -= 0.20;
        else if (returnedMoney >= 0.10) returnedMoney -= 0.10;
        else if (returnedMoney >= 0.05) returnedMoney -= 0.05;
        else if (returnedMoney >= 0.02) returnedMoney -= 0.02;
        else if (returnedMoney >= 0.01) returnedMoney -= 0.01;

        returnedMoney = returnedMoney.toFixed(2);
        countCoins++;
    }

    console.log(countCoins);
}

printCountReturnedCoints(["1.51"]);