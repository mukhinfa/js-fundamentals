"use strict";
function getMathResult(base, count) {
    let result = 0;
    let resultStr = '';
    if (count <=0 || typeof(count) != "number"){
        return base;
    } else {
    for (let i = 1; i <= count; i++) {
        result += base;
        resultStr+= result;
        if (i < count) {
            resultStr+= "---";
        }
    }
    return resultStr;
}
}
console.log(getMathResult(10,"6"));

console.log(typeof(4566));