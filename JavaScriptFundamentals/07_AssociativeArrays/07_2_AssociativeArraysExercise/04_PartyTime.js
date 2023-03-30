function printGuestInfo(guestInfo) {
    function removeGuest(guest, list) {
        let indexToRemoveGuest = list.indexOf(guest);
        list.splice(indexToRemoveGuest, 1);
    }

    let guestList = {
        vip: [],
        regular: []
    }

    let indexParty = guestInfo.indexOf('PARTY');
    let allGuests = guestInfo.splice(0, indexParty);
    let guestsOnTheParty = guestInfo.splice(1);

    allGuests.forEach(guest => {
        if (guest.charCodeAt(0) >= 48 && guest.charCodeAt(0) <= 57) {
            guestList.vip.push(guest);
        } else {
            guestList.regular.push(guest);
        }
    });

    guestsOnTheParty.forEach(guest => {
        if (guestList.vip.includes(guest)) {
            removeGuest(guest, guestList.vip);
        } else if (guestList.regular.includes(guest)) {
            removeGuest(guest, guestList.regular);
        }
    });

    let countGuests = guestList.vip.length + guestList.regular.length;
    console.log(countGuests);
    console.log(guestList.vip.join('\n'));
    console.log(guestList.regular.join('\n'));
}

printGuestInfo([
    '7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
]);