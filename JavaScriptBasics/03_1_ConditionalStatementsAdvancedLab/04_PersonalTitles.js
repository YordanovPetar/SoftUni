function printGreeting(input) {
    let age = Number(input[0]);
    let gender = input[1];

    if (gender === "m") {
        age < 16 ? console.log("Master") : console.log("Mr.");
    } else if (gender === "f") {
        age < 16 ? console.log("Miss") : console.log("Ms.");
    }
}

printGreeting(["17", "m"]);