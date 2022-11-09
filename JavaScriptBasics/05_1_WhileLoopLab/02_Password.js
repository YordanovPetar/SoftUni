function printGreetingAfterCorrectPassword(input) {
    let username = input[0];
    let password = input[1];
    let index = 2;

    while (true) {
        let currentPassword = input[index];

        if (currentPassword === password) {
            console.log(`Welcome ${username}!`);
            break;
        }

        index++;
    }
}

printGreetingAfterCorrectPassword(["Nakov",
"1234",
"Pass",
"1324",
"1234"])