function printEmployees(input) {
    let listEmployees = [];

    for (let i = 0; i < input.length; i++) {
        let currentEmployee = input[i];
        let nameLength = currentEmployee.length;

        let employee = {
            name: currentEmployee,
            personalNumber: nameLength
        }

        listEmployees.push(employee);
    }

    for (let employee of listEmployees) {
        console.log(`Name: ${employee.name} -- Personal Number: ${employee.personalNumber}`);
    }  
}

printEmployees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]);