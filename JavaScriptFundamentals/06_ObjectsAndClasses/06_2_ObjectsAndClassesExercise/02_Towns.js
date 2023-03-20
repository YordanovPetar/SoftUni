function solve(input) {
    let listTowns = [];

    input.forEach(element => {
        let currentTown = element.split(" | ");

        let townObj = {
            town: currentTown[0],
            latitude: Number(currentTown[1]).toFixed(2),
            longitude: Number(currentTown[2]).toFixed(2)
        }

        listTowns.push(townObj);
    });

    for (let key of Object.keys(listTowns)) {
        console.log(listTowns[key]);
    }
}

solve(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
);