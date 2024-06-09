const re = require("@mrmlnc/readdir-enhanced");
const { title } = require("process");

const films = [
    {
    id: 1,
    title: "Black Widow",
    year: 2021,
    released: "09 Jul 2021",
    runtime: "134 min",
    genre: ["Action", "Sci-Fi", "Adventure"],
    director: "Cate Shortland",
    writer: "Eric Pearson, Jac Schaeffer, Ned Benson",
    actors: ["Scarlett Johansson", "Florence Pugh",
    "David Harbour"],
    plot: "Natasha Romanoff confronts the darker parts of her ledger when a dangerous conspiracy with ties to her pastarises.",
    country: "United States",
    poster: "https://m.media-amazon.com/images/M/MV5BNjRmNDI5MjMtMmFhZi00YzcwLWI4ZGItMGI2MjI0N2Q3YmIwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
    imdbRating: 6.9,
    imdbVotes: 121932,
    type: "movie",
    boxOffice: "$138,027,361",
    production: "Marvel Studios",
    },
    {
    id: 2,
    title: "Harry Potter and the Deathly Hallows: Part2",
    year: 2011,
    released: "15 Jul 2011",
    runtime: "130 min",
    genre: ["Adventure", "Drama", "Fantasy"],
    director: "David Yates",
    writer: "Steve Kloves, J.K. Rowling",
    actors: ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"],
    plot: "Harry, Ron, and Hermione search forVoldemort's remaining Horcruxes in their effort to destroy the DarkLord as the final battle rages on at Hogwarts.",
    country: "United Kingdom, United States",
    poster: "https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
    imdbRating: 8.1,
    imdbVotes: 790377,
    type: "movie",
    boxOffice: "$381,409,310",
    production: "Heyday Films, Moving Picture Company,Warner Bros.",
    },
    {
    id: 3,
    title: "Star Wars",
    year: 1977,
    released: "25 May 1977",
    runtime: "121 min",
    genre: ["Action", "Adventure", "Fantasy"],
    director: "George Lucas",
    writer: "George Lucas",
    actors: ["Mark Hamill", "Harrison Ford", "CarrieFisher"],
    plot: "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vad",
    country: "United States, United Kingdom",
    poster: "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    imdbRating: 8.6,
    imdbVotes: 1259440,
    type: "movie",
    boxOffice: "$460,998,507",
    production: "Lucasfilm Ltd.",
    },
    {
    id: 4,
    title: "Harry Potter and the Half-Blood Prince",
    year: 2009,
    released: "15 Jul 2009",
    runtime: "153 min",
    genre: ["Action", "Adventure", "Family"],
    director: "David Yates",
    writer: "Steve Kloves, J.K. Rowling",
    actors: ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"],
    plot: "As Harry Potter begins his sixth year at Hogwarts, he discovers an old book marked as 'the property of the Half-Blood Prince' and begins to learn more about Lord Voldemort\'s dark past.",
    country: "United Kingdom",
    poster: "https://m.media-amazon.com/images/M/MV5BNzU3NDg4NTAyNV5BMl5BanBnXkFtZTcwOTg2ODg1Mg@@._V1_SX300.jpg",
    imdbRating: 7.6,
    imdbVotes: 492245,
    boxOffice: "$302,305,431",
    production: "Heyday Films, Warner Bros.",
    },
    {
    id: 5,
    title: "Harry Potter and the Sorcerer's Stone",
    year: 2001,
    released: "16 Nov 2001",
    runtime: "152 min",
    genre: ["Adventure", "Family", "Fantasy"],
    director: "Chris Columbus",
    writer: "J.K. Rowling, Steve Kloves",
    actors: ["Daniel Radcliffe", "Rupert Grint", "Richard Harris"],
    plot: "An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world.",
    country: "United Kingdom, United States",
    poster: "https://m.media-amazon.com/images/M/MV5BNjQ3NWNlNmQtMTE5ZS00MDdmLTlkZjUtZTBlM2UxMGFiMTU3XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg",
    imdbRating: 7.6,
    imdbVotes: 684604,
    boxOffice: "$318,087,620",
    production: "1492 Pictures, Heyday Films, WarnerBrothers",
    }
    ]

function getGenre(films){
    return [...new Set(films.flatMap(film => film.genre))];
}

function getActors(films){
    return [...new Set(films.flatMap(film => film.actors))];
}

function getRating(films){
    return films.sort((a,b) => b.imdbRating - a.imdbRating)
}

function getObj(films){
    return films.map(films =>({id:films.id, title:films.title, released:films.released, plot:films.plot}))
}

function getFilmByYear(films,year){
    return films.filter(films => films.year === year)
}

function getFilmByTitle(films, title){
    return films.filter(films => films.title.includes(title))
}

function getFilms(films, name){
    return films.filter(films => films.title.includes(name) || films.plot.includes(name))
}

function getSearch(films, title, value){
    return films.filter(films => films[title] === value)
}
console.log(getGenre(films))
console.log(getActors(films))
console.log(getRating(films))
console.log(getObj(films))
console.log(getFilmByYear(films, 2001))
console.log(getFilmByTitle(films, "Harry Potter and the Half-Blood Prince"))
console.log(getFilms(films, "An orphaned boy"))
console.log(getSearch(films, "year", 2011))

