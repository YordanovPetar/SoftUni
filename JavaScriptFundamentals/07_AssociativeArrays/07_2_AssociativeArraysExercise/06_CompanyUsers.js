function printEmployeeInfo(input) {
    let result = {};

    input.forEach(line => {
        let [companyName, employeeId] = line.split(" -> ");
        if (!result.hasOwnProperty(companyName)) {
            result[companyName] = [];
        }
        result[companyName].push(employeeId);
    });

    let sortedCompanies = Object.entries(result).sort((a, b) => a[0].localeCompare(b[0]));

    sortedCompanies.forEach(el => {
        const companyName = el[0];
        const allIDs = el[1];
        console.log(companyName);

        let uniqueIDs = new Set(allIDs);
        for (const id of uniqueIDs) {
            console.log(`-- ${id}`);
        }
    });
}

printEmployeeInfo([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
]);