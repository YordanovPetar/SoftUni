function movies(data) {
    let movies = [];

    data.forEach(element => {
        let elements = element.split(' ');

        if (elements[0] === "addMovie") {
            let movieName = elements.slice(1).join(' ');
            movies.push({ name: movieName });
        } else if (elements.includes('directedBy')) {
            let indexdirectedBy = elements.indexOf('directedBy');
            let movieName = elements.slice(0, indexdirectedBy).join(' ');
            let director = elements.slice(indexdirectedBy + 1).join(' ');

            movies.forEach(movie => {
                if (movie.name === movieName) {
                    movie.director = director;
                }
            });
        } else if (elements.includes('onDate')) {
            let indexOnDate = elements.indexOf('onDate');
            let movieName = elements.slice(0, indexOnDate).join(' ');
            let date = elements.slice(indexOnDate + 1).join('');

            movies.forEach(movie => {
                if (movie.name === movieName) {
                    movie.date = date;
                }
            });
        }
    });

    movies.forEach(movie => {
        if (movie.name !== undefined && movie.director !== undefined && movie.date !== undefined) {
            console.log(JSON.stringify(movie));
        }
    })
}

movies([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
]);