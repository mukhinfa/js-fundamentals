"use strict";

function fib(num) {
    let a = 0,
        b = 1;
    let fib = "";
    if (typeof (num) !== 'number' || num < 1|| (num - parseInt(num) !== 0)) {
        return fib;
    } else {
        for (let i = 1; i <= num; i++) {
            fib += a;
            if (i == num) {
                return fib;
            } else {
                fib += " ";
            }
            a = a + b;
            b = a - b;
        }

    }
}
console.log("__START__");
console.log(`|${fib(4.4)}|`);