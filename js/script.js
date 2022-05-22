"use strict";

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam', 'Zlatan'];

function sortStudentsByGroups(arr) {
    arr.sort();

    let outSideAmount = arr.length % 3;
    let outSideList = [];

    if (outSideAmount === 0) {
        outSideList.push('-');
    } else {
        for (let i = arr.length -1; i >= arr.length - outSideAmount; i--) {
            outSideList.push(arr[i]);
        }
    }

    let finalArr = [];

    for (let i = 0; i < arr.length - outSideAmount; i += 3) {
        finalArr.push([arr[i], arr[i + 1], arr[i + 2]]);
    }
    outSideList.sort();
    finalArr.push(`Оставшиеся студенты: ${outSideList.join(', ')}`);
    return finalArr;

}
console.log(sortStudentsByGroups(students));