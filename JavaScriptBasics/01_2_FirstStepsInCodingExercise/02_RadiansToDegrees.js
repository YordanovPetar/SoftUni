function convertorRadiansToDegrees(input) {
    let radians = Number(input[0]);
    let degrees = (radians * 180) / Math.PI;

    console.log(degrees);
}

convertorRadiansToDegrees(["3.1416"]);