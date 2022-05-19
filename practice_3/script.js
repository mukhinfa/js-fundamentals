/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

// Код возьмите из предыдущего домашнего задания
let numberOfFilms;

function start() {
    // numberOfFilms = + prompt("Сколько фильмов вы уже посмотрели?", "");
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "").trim();
    }
}
start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    let a, b;
    for (let i = 0; i < 2; i++) {

        for (let j = 0; j > -1; j++) {
            a = prompt((i + 1) + " Один из последних просмотренных фильмов?", "").trim();
            b = +prompt((i + 1) + " На сколько оцените его?", "").trim();
            personalMovieDB.movies[a] = b;
            if (typeof (a) == "string" && a.length < 50 && b) {
                break;
            }
        }

    }
}
rememberMyFilms();

function detectPersonalLevel() {
    if (numberOfFilms < 10) {
        alert("Просмотрено довольно мало фильмов");
    } else if (numberOfFilms >= 10 && numberOfFilms < 30) {
        alert("Вы классический зритель");
    } else if (numberOfFilms >= 30) {
        alert("Вы киноман");
    } else {
        alert('"Произошла ошибка"');
    }
}

function writeYourGenres() {
    let i = 0;
    while (personalMovieDB.genres.length < 3) {
        personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}`, "").trim();
        i++;
    }
}
writeYourGenres();

function showMyDB() {
    if (!personalMovieDB.privat) {
        console.log(personalMovieDB);
    }
}
showMyDB();

