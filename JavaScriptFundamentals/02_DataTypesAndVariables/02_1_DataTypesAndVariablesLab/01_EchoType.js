function printParameterType(input) {
    let parameterType = typeof(input);

    if (parameterType === "string" || parameterType === "number") {
        console.log(parameterType);
        console.log(input);
    } else {
        console.log(parameterType);
        console.log("Parameter is not suitable for printing");
    }
}

printParameterType(null);
