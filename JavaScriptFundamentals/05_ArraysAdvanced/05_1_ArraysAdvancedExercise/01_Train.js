function printCountPeopleAndWagons(input) {
    let wagonsWithPassengersInside = input
        .shift()
        .split(' ')
        .map(Number);

    let maxWagonCapacity = Number(input.shift());

    for (let element of input) {
        let [command, newWagonWithPassengersInside]
            = element.split(' ');

        if (command === 'Add') {
            wagonsWithPassengersInside.push(Number(newWagonWithPassengersInside));
        } else {
            let passangers = Number(command);

            for (let wagonPassangers of wagonsWithPassengersInside) {
                let currentCapacity = wagonPassangers + passangers; 
                if (currentCapacity <= maxWagonCapacity) {
                    wagonsWithPassengersInside.splice(wagonsWithPassengersInside.indexOf(wagonPassangers), 1, currentCapacity);
                    break;
                }
            }
        }
    }
    
    console.log(wagonsWithPassengersInside.join(' '));
}

printCountPeopleAndWagons(['0 0 0 10 2 4',
'10',
'Add 10',
'10',
'10',
'10',
'8',
'6']
);

console.log('--------');

printCountPeopleAndWagons(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75']
);

