function schoolLibrary(input) {
    let books = input.shift().split('&');

    for (let i = 0; i < input.length; i++) {
        let values = input[i].split(' | ');
        let command = values[0];
        
        if (command === "Done") {
            console.log(books.join(', '));
            return;

        } else if (command === "Swap Books") {
            let book1 = values[1];
            let book2 = values[2];

            if(books.includes(book1) && books.includes(book2)) {
                let indexBook1 = books.indexOf(book1);
                let indexBook2 = books.indexOf(book2);

                books.splice(indexBook1, 1, book2);
                books.splice(indexBook2, 1, book1);
            }

        } else if (command === "Check Book") {
            let index = +values[1];

            if (index >= 0 && index < books.length) {
                console.log(books[index]);
            }

        } else {
            let bookName = values[1];

            switch (command) {
                case "Add Book":
                    if(!books.includes(bookName)) {
                        books.unshift(bookName);
                    }
                    break;
                
                case "Take Book":
                    if(books.includes(bookName)) {
                        books.splice(books.indexOf(bookName), 1);
                    }
                    break;

                case "Insert Book":
                    if(!books.includes(bookName)) {
                        books.push(bookName);
                    }
                    break;
            }
        }
    }
}

schoolLibrary(["Don Quixote&The Great Gatsby&Moby Dick",
"Add Book | Ulysses",
"Take Book | Don Quixote",
"Insert Book | Alice's Adventures in Wonderland",
"Done"]);

console.log('----------');

schoolLibrary(["Anna Karenina&Heart of Darkness&Catch-22&The Stranger",
"Add Book | Catch-22",
"Swap Books | Anna Karenina | Catch-22",
"Take Book | David Copperfield",
"Done"]);

console.log('----------');

schoolLibrary(["War and Peace&Hamlet&Ulysses&Madame Bovary",
"Check Book | 2",
"Swap Books | Don Quixote | Ulysses",
"Done"]);