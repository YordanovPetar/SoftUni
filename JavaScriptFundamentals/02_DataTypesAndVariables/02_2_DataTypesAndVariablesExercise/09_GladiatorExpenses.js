function printGladiatorexpenses(lostFightsCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let expenses = 0;
    let brokenShieldCount = 0;

    for (let lostFihgt = 1; lostFihgt <= lostFightsCount; lostFihgt++) {
        if (lostFihgt % 2 === 0) expenses += helmetPrice;
        if (lostFihgt % 3 === 0) expenses += swordPrice;
        if (lostFihgt % 2 === 0 && lostFihgt % 3 === 0) {
            expenses+= shieldPrice;
            brokenShieldCount++;
        }

        if (brokenShieldCount > 0 && brokenShieldCount % 2 === 0) {
            expenses += armorPrice;
            brokenShieldCount = 0;
        }
    }

    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}

printGladiatorexpenses(23, 12.50, 21.50, 40, 200);