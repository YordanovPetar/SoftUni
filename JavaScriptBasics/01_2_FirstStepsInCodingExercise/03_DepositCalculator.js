function depositSum(input) {
    let deposit = Number(input[0]);
    let periodInMonths = Number(input[1]);
    let percentLoan = Number(input[2]) / 100;

    let sum = deposit + periodInMonths * ((deposit * percentLoan) / 12);

    console.log(sum);
}

depositSum(["200", "3", "5.7"]);