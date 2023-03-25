function printAddressBook(input) {
    let addressBook = {};

    input.forEach(el => {
        let tokens = el.split(':');
        let name = tokens[0];
        let address = tokens[1];

        addressBook[name] = address;
    });

    let sortedElements = Object.keys(addressBook).sort((keyA, keyB) => keyA.localeCompare(keyB));

    sortedElements.forEach(name => {
        console.log(`${name} -> ${addressBook[name]}`);
    });
}

printAddressBook([
  "Bob:Huxley Rd",
  "John:Milwaukee Crossing",
  "Peter:Fordem Ave",
  "Bob:Redwing Ave",
  "George:Mesta Crossing",
  "Ted:Gateway Way",
  "Bill:Gateway Way",
  "John:Grover Rd",
  "Peter:Huxley Rd",
  "Jeff:Gateway Way",
  "Jeff:Huxley Rd",
]);
