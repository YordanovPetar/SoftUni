function spaceTravel(input) {
    let routes = input.shift().split('||');
    let fuelAmount = Number(input.shift());
    let ammunition = Number(input.shift());
    
    for (let i = 0; i < routes.length; i++) {
        let route = routes[i].slice().split(' ');
        let command = route[0];

        switch (command) {
            case "Travel":
                let lightYears = Number(route[1]);
                fuelAmount -= lightYears;

                if (fuelAmount < 0) {
                    console.log("Mission failed.");
                    return;
                }
                
                console.log(`The spaceship travelled ${lightYears} light-years.`);
                
                break;

            case "Enemy":
                let enemyArmour = Number(route[1]);

                if (ammunition >= enemyArmour) {
                    ammunition -= enemyArmour;

                    console.log(`An enemy with ${enemyArmour} armour is defeated.`);
                } else if (fuelAmount >= enemyArmour * 2) {
                    fuelAmount -= enemyArmour * 2;

                    console.log(`An enemy with ${enemyArmour} armour is outmaneuvered.`);
                } else {
                    console.log(`Mission failed.`);
                    return;
                }

                break;

            case "Repair":
                let fuelToAdd = Number(route[1]);
                let amunitionToAdd = fuelToAdd * 2;

                fuelAmount += fuelToAdd;
                ammunition += amunitionToAdd;

                console.log(`Ammunitions added: ${amunitionToAdd}.`);
                console.log(`Fuel added: ${fuelToAdd}.`);
                
                break;

            case "Titan":
                console.log(`You have reached Titan, all passengers are safe.`);
                return;  
        }
    }
}

spaceTravel([ 'Travel 10||Enemy 30||Repair 15||Titan', 
'50', 
'80' ]);

console.log('----------');

spaceTravel([ 'Travel 20||Enemy 50||Enemy 50||Enemy 10||Repair 15||Enemy 50||Titan', 
'60', 
'100' ]);