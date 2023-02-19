function manOWar(input) {
    let pirateShip = input.shift().split('>').map(Number);
    let warShip = input.shift().split('>').map(Number);
    let maxHealth = Number(input.shift());
    
    for (let i = 0; i < input.length; i++) {
        let values = input[i].slice().split(' ');
        let command = values[0];

        switch (command) {
            case "Fire":
                let fireIndex = +values[1];
                let damageFromFire = +values[2];

                if (fireIndex >= 0 && fireIndex < warShip.length) {
                    warShip[fireIndex] -= damageFromFire;

                    if (warShip[fireIndex] <= 0) {
                        return console.log("You won! The enemy ship has sunken.");
                    }
                }
                break;
            case "Defend":
                let startIndex = +values[1];
                let endIndex = +values[2];
                let damageFromDefend = +values[3];

                if ((startIndex >= 0 && startIndex < pirateShip.length) && (endIndex >= 0 && endIndex < pirateShip.length)) {
                    for (let i = startIndex; i <= endIndex; i++){
                        pirateShip[i] -= damageFromDefend;
                        
                        if (pirateShip[i] <= 0) {
                            return console.log("You lost! The pirate ship has sunken.");
                        }
                    }
                }
                break;
            case "Repair":
                let repairIndex = +values[1];
                let health = +values[2];

                if (repairIndex >= 0 && repairIndex < pirateShip.length) {
                    let missingHealth = maxHealth - pirateShip[repairIndex];
                    pirateShip[repairIndex] += Math.min(missingHealth, health);
                }
                break;
            case "Status":
                let sectionsForRepair = pirateShip.filter(x => x < (maxHealth * 0.2));
                console.log(`${sectionsForRepair.length} sections need repair.`);
                break;
            case "Retire":
                console.log(`Pirate ship status: ${pirateShip.reduce((a, b) => a + b, 0)}`);
                console.log(`Warship status: ${warShip.reduce((a, b) => a + b, 0)}`);
                return;  
        }
    }
}

manOWar(["12>13>11>20>66",
"12>22>33>44>55>32>18",
"70",
"Fire 2 11",
"Fire 8 100",
"Defend 3 6 11",
"Defend 0 3 5",
"Repair 1 33",
"Status",
"Retire"]);

manOWar(["2>3>4>5>2",
"6>7>8>9>10>11",
"20",
"Status",
"Fire 2 3",
"Defend 0 4 11",
"Repair 3 18",
"Retire"]);