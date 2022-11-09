function printIsNumberEvenOrOdd(input) {
    let num = Number(input[0]);

    num % 2 === 0 ? console.log("even") : console.log("odd");
}

printIsNumberEvenOrOdd(["3"]);