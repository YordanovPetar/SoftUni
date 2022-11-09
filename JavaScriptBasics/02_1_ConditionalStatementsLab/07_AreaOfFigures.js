function printArea(input) {
    let figure = input[0];
    let sideA = Number(input[1]);

    switch (figure) {
        case "square": console.log(sideA * sideA); break;
        case "rectangle": console.log(sideA * Number(input[2])); break;
        case "circle": console.log(sideA * sideA * Math.PI); break;
        case "triangle": console.log(sideA * Number(input[2]) / 2); break;
    }
}

printArea(["rectangle", "7", "2.5"]);