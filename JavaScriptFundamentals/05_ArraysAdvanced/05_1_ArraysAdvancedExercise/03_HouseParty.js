function houseParty(input) {
    let guestList = [];
    
    for (let i = 0; i < input.length; i++) {
        let guest = input[i].split(' ');
        let guestName = guest[0];

        if (!guest.includes('not')) {

            if (guestList.includes(guestName)) {
                console.log(`${guestName} is already in the list!`);
            } else {
                guestList.push(guestName);
            }
            
        } else {

            if (guestList.includes(guestName)) {
                guestList.splice(guestList.indexOf(guestName), 1);
            } else {
                console.log(`${guestName} is not in the list!`);
            }
            
        }
    }

    console.log(guestList.join('\n'));
}

houseParty(['Allie is going!',
'George is going!',
'John is not going!',
'George is not going!']);

console.log('----------');

houseParty(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']);