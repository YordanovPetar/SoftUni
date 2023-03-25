function printPhoneBook(data) {
    let phoneBook = {};

    data.forEach(element => {
        let [name, phoneNumber] = element.split(' ');
        phoneBook[name] = phoneNumber;
    });


    for (let name in phoneBook) {
        console.log(`${name} -> ${phoneBook[name]}`);
    }
}

printPhoneBook([
    'Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344'
]);