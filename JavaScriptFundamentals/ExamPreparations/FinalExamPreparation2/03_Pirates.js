function pirates(input) {
    let objCity = {}
    let commands = input.shift()
    while (commands !== 'Sail') {
        let [cities, population, gold] = commands.split('||')
        population = Number(population)
        gold = Number(gold)
        if(!objCity.hasOwnProperty(cities)){
             objCity[cities] = { population, gold }
        }else{
            objCity[cities].population+=population
            objCity[cities].gold+=gold
        }
       
        commands = input.shift()
    }
    
    while (commands !== 'End') {
        let tokens = commands.split('=>')
        if (tokens[0] === 'Plunder') {
            plunder(tokens[1], tokens[2], tokens[3])
        } else if (tokens[0] === 'Prosper') {
            prosper(tokens[1], tokens[2])
        }
        commands = input.shift()
    }

    function plunder(town, people, gold) {
        people = Number(people)
        gold = Number(gold)
        
        objCity[town].population -= people
        objCity[town].gold -= gold
        console.log(`${town} plundered! ${gold} gold stolen, ${people} citizens killed.`)
        if ((objCity[town].population === 0) || (objCity[town].gold === 0)) {
            delete objCity[town]
            console.log(`${town} has been wiped off the map!`)
        }
    }

    function prosper(town, gold) {
        gold = Number(gold)
        
        if (gold >= 0) {
            objCity[town].gold += gold
            console.log(`${gold} gold added to the city treasury. ${town} now has ${objCity[town].gold} gold.`)
        } else {
            console.log(`Gold added cannot be a negative number!`)
        }
    }
    let sort = Object.entries(objCity).sort((a, b) => (b[1].gold - a[1].gold) || a[0].localeCompare(b[0]))
    
    if (sort.length > 0) {
        console.log(`Ahoy, Captain! There are ${sort.length} wealthy settlements to go to:`)
        sort.forEach(element => {
            
            console.log(`${element[0]} -> Population: ${element[1].population} citizens, Gold: ${element[1].gold} kg`)
        })
    } else {
        console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`)
    }
}

pirates([
    'Tortuga||345000||1250',
    'Santo Domingo||240000||630',
    'Havana||410000||1100',
    'Sail',
    'Plunder=>Tortuga=>75000=>380',
    'Prosper=>Santo Domingo=>180',
    'End'
]);
