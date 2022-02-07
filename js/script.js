'use srtict';

const numberOfFilms = +prompt('Скільки фільмів ви вже подивились?', '24');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false 
};


const a = prompt('Один з останніх пепеглянутих фільмів?', ''),
      b = prompt('На скільки оціние його?'),
      c = prompt('Один з останніх пепеглянутих фільмів?', ''),
      d = prompt('На скільки оціние його?');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);


