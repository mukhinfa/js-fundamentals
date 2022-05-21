"use strict";

const someString = 'This is some strange string';
const s = 45366;

function reverse(str) {
    let arr = [];
    console.log(typeof (someString));

    if (typeof (str) !== 'string') {
        return "Ошибка!";
    } else {
        for (let i = str.length; i >= 0; i--) {
            arr[(str.length - i)] = str[i];
        }
        return arr.join('');
    }
}
console.log(reverse(someString));
console.log('!!!! ', reverse(s));


const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    let str = '';
    arr.length === 0 ? str = 'Нет доступных валют' : str = 'Доступные валюты:\n';

    arr.forEach(function (curr, i) {
        if (curr !== missingCurr) {
            str += `${curr}\n`;
        }
    });
    return str;
}

availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY')