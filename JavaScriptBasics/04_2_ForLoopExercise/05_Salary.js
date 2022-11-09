function printLeftSalary(input) {
    let openedBrowserTabs = Number(input[0]);
    let salary = Number(input[1]);
    let sumPenalties = 0;

    for (let i = 2; i < input.length; i++) {
        let browserName = input[i];

        switch (browserName) {
            case "Facebook": sumPenalties += 150; break;
            case "Instagram": sumPenalties += 100; break;
            case "Reddit": sumPenalties += 50; break;
        }
    }

    salary <= sumPenalties ?
        console.log("You have lost your salary.") :
        console.log(salary - sumPenalties);;
}

printLeftSalary(["3", "500", "Github.com", "Stackoverflow.com", "softuni.bg"]);