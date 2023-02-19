function guineaPig(input) {
    let foodKg = Number(input.shift());
    let hayKg = Number(input.shift());
    let coverKg = Number(input.shift());
    let weightKg = Number(input.shift());
    let hasToGoToStore = false;

    for (let day = 1; day <= 30; day++){
        foodKg -= 0.3;
       
        if (day % 2 === 0) {
            hayKg -= foodKg * 0.05;
        }

        if (day % 3 === 0) {
            coverKg -= weightKg / 3;
        }

        if (foodKg - 0 <= 1e-3 || hayKg - 0 <= 1e-3 || coverKg - 0 <= 1e-3) {
            hasToGoToStore = true;
            break;
        }
    }

    let result = hasToGoToStore ?
        `Merry must go to the pet store!` :
        `Everything is fine! Puppy is happy! Food: ${foodKg.toFixed(2)}, Hay: ${hayKg.toFixed(2)}, Cover: ${coverKg.toFixed(2)}.`;

    console.log(result);
}

guineaPig(["9",
"5",
"5.2",
"1"]);