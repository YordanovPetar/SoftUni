function printIsTripAffordable(input) {
    let command = input[0];
    let destinations = 0;
    let index = 0;

    while (command !== "End") {
        let destination = command;
        let budget = Number(input[index + 1]);
        let savedMoney = 0;
        
        while (savedMoney < budget) {
            savedMoney += Number(input[index + 2]);
            index++;
        }
        savedMoney = 0;
        console.log(`Going to ${destination}!`);
        
        index += 2;
        command = input[index];
    }
}

printIsTripAffordable(["France",
"2000",
"300",
"300",
"200",
"400",
"190",
"258",
"360",
"Portugal",
"1450",
"400",
"400",
"200",
"300",
"300",
"Egypt",
"1900",
"1000",
"280",
"300",
"500",
"End"]);