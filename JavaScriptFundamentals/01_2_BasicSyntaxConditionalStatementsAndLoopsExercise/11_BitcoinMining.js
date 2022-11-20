function printMinedBitcoinInfo(input) {
    let money = 0;
    let shiftDay = 0;
    let purchasedBitcoins = 0;
    let dayFirstPurchasedBitcoin = 0;

    for (let i = 0; i < input.length; i++) {
        let currentDayMinedGold = Number(input[i]);
        shiftDay++;

        if (shiftDay % 3 === 0) {
            currentDayMinedGold = currentDayMinedGold - (currentDayMinedGold * 0.30);
        }

        money += currentDayMinedGold * 67.51;

        while (money >= 11949.16) {
            if (purchasedBitcoins === 0) {
                dayFirstPurchasedBitcoin = shiftDay;
            }

            purchasedBitcoins++;
            money -= 11949.16;
        }
    }

    console.log(`Bought bitcoins: ${purchasedBitcoins}`);

    if (purchasedBitcoins > 0) {
        console.log(`Day of the first purchased bitcoin: ${dayFirstPurchasedBitcoin}`);
    }

    console.log(`Left money: ${money.toFixed(2)} lv.`);
}

printMinedBitcoinInfo([100, 200, 300]);