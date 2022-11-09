function printIsBookFound(input) {
    let searchedBook = input[0];
    let currentBook = input[1];
    let index = 0;

    while (currentBook !== searchedBook) {
        if (currentBook === "No More Books") {
            console.log(`The book you search is not here!`);
            console.log(`You checked ${index} books.`);
            return;
        }
        
        currentBook = input[index + 2];
        index++;
    }

    console.log(`You checked ${index} books and found it.`);
}

printIsBookFound(["The Spot",
"Hunger Games",
"Harry Potter",
"Torronto",
"Spotify",
"No More Books"]);