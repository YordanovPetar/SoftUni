function dungeonestDark(dungeonsRooms) {
    let initialHealth = 100;
    let initialCoins = 0;
    let dungeons = dungeonsRooms.toString().split('|');
    let bestRoom = 1;
    
    for (let i = 0; i < dungeons.length; i++) {
        let currentDungeonRoom = dungeons[i].toString().split(' ');
        let item = currentDungeonRoom[0];
        let points = Number(currentDungeonRoom[1]);

        if (item === 'potion') {
            initialHealth += points;
            
            if (initialHealth > 100) {
                points = points - (initialHealth - 100);
                initialHealth = 100;
            }

            // initialHealth = initialHealth + points > 100 ? 100 : initialHealth + points;

            console.log(`You healed for ${points} hp.`);
            console.log(`Current health: ${initialHealth} hp.`);
        } else if (item === 'chest') {
            let coins = points;
            initialCoins += coins;

            console.log(`You found ${coins} coins.`);
        } else {
            let monsterName = item;
            initialHealth -= points;

            if (initialHealth > 0) {
                console.log(`You slayed ${monsterName}.`);
            } else {
                console.log(`You died! Killed by ${monsterName}.`);
                console.log(`Best room: ${bestRoom}`);
                break;
            }
        }

        bestRoom++;
    }

    if (bestRoom > dungeons.length) {
        console.log(`You've made it!`);
        console.log(`Coins: ${initialCoins}`);
        console.log(`Health: ${initialHealth}`);
    }
}

dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
console.log('----------');
dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);