import {
  films,
  genres,
  actors,
  filmsRating,
  filmsObj,
  filmByYear,
  filmByTitle,
  filmByString,
  filmSearch,
} from "./mock-data";

describe("Jest tes", () => {
  test("Genres from all films", () => {
    function getGenre(films) {
      return [...new Set(films.flatMap((film) => film.genre))];
    }

    expect(getGenre(films)).toEqual(genres);
  });

  test("Actors from all films", () => {
    function getActors(films) {
      return [...new Set(films.flatMap((film) => film.actors))];
    }

    expect(getActors(films)).toEqual(actors);
  });

  test("Films by rating", () => {
    function getRating(films) {
      return films.sort((a, b) => b.imdbRating - a.imdbRating);
    }

    expect(getRating(films)).toEqual(filmsRating);
  });

  test("Films with options", () => {
    function getObj(films) {
      return films.map((films) => ({
        id: films.id,
        title: films.title,
        released: films.released,
        plot: films.plot,
      }));
    }

    expect(getObj(films)).toEqual(filmsObj);
  });

  test("Film by year", () => {
    function getFilmByYear(films, year) {
      return films.filter((films) => films.year === year);
    }

    expect(getFilmByYear(films, 2001)).toEqual(filmByYear);
  });

  test("Film by title", () => {
    function getFilmByTitle(films, title) {
      return films.filter((films) => films.title.includes(title));
    }

    expect(
      getFilmByTitle(films, "Harry Potter and the Half-Blood Prince")
    ).toEqual(filmByTitle);
  });

  test("Film by string", () => {
    function getFilms(films, name) {
      return films.filter(
        (films) => films.title.includes(name) || films.plot.includes(name)
      );
    }

    expect(getFilms(films, "An orphaned boy")).toEqual(filmByString);
  });

  test("Film by title", () => {
    function getSearch(films, title, value) {
      return films.filter((films) => films[title] === value);
    }

    expect(getSearch(films, "year", 2011)).toEqual(filmSearch);
  });
});
