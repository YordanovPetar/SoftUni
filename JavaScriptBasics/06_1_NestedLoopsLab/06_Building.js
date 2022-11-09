function printRoomNumbers(input) {
    let floors = Number(input[0]);
    let rooms = Number(input[1]);

    for (let floor = floors; floor > 0; floor--) {
        let apartments = "";
        let offices = "";

        for (let room = 0; room < rooms; room++) {
            if (floors === 1 || floor === floors) {
                apartments += `L${floor}${room} `;
            } else if (floor % 2 !== 0) {
                apartments += `A${floor}${room} `;
            } else {
                offices += `O${floor}${room} `;
            }
        }

        if (apartments.length > 0) {
            console.log(`${apartments}`);
        }
            
        if (offices.length > 0) {
            console.log(`${offices}`);
        }
        
    }
}

printRoomNumbers(["6", "4"]);