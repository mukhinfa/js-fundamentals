/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';

// Код возьмите из предыдущего домашнего задания

let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    toggleVisibleMyDB: function () {
        personalMovieDB.privat = !personalMovieDB.privat;
    },
    start: function () {
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "").trim();
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "").trim();
        }
    },
    rememberMyFilms: function () {
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
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            alert("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            alert("Вы классический зритель");
        } else if (personalMovieDB.count >= 30) {
            alert("Вы киноман");
        } else {
            alert('"Произошла ошибка"');
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i<= 3; i++) {
            let genre = prompt(`Ваш любимы жанр под номером ${i}?`);

            if (genre == '' || genre == null) {
                alert("Вы ввели некорректные данные или не ввели их вовсе!");
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    },
    showMyDB: function () {
        if (!personalMovieDB.privat) {
            console.log(personalMovieDB);
        }
    }
};