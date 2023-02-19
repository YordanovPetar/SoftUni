function muOnline(input) {
    let initialHealth = 100;
    let initialBitcoins = 0;
    let rooms = input.split('|');

    for (let i = 0; i < rooms.length; i++) {
        let room = rooms[i].split(' ');
        let command = room[0];
        let number = Number(room[1]);
        
        if (command === "potion") {
            let missingHealth = 100 - initialHealth;
            let restoredHealth = Math.min(missingHealth, number);
            initialHealth += restoredHealth;

            console.log(`You healed for ${restoredHealth} hp.`);
            console.log(`Current health: ${initialHealth} hp.`);

        } else if (command === "chest") {
            initialBitcoins += number;
            
            console.log(`You found ${number} bitcoins.`);

        } else {
            initialHealth -= number;

            if (initialHealth <= 0) {

                console.log(`You died! Killed by ${command}.`);
                console.log(`Best room: ${i + 1}`);
                return;

            } else {
                console.log(`You slayed ${command}.`);
            }
        }
    }

    console.log(`You've made it!\nBitcoins: ${initialBitcoins}\nHealth: ${initialHealth}`);
}

// muOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");

muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");