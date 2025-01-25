// Part 1: Thinking Functionally
const numbers = [3, 7, 12, 5, 20, 8, 15];

// Take an array of numbers and return the sum.
function arraySum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

console.log(arraySum(numbers))

// Take an array of numbers and return the average.
function arrayAvg(arr) {
    let sum = arraySum(arr);
    return sum / arr.length;
}

console.log(arrayAvg(numbers))

// Take an array of strings and return the longest string.
const strings = ["apple", "banana", "cherry", "date", "elderberry", "fig", "grape"];

function longestStr(arr) {
    let longest = arr[0]
    arr.forEach(value => {
        if (value.length > longest.length) {
            longest = value;
        }
    });
    return longest;
}

console.log("Longest string:", longestStr(strings))

// Take an array of strings, and a number and return an array of the strings that are longer than the given number. 
let n = 4;

function strNum(arr) {
    
    let holder = new Array ();
    arr.forEach(value => {
        if (value.length > n) {
            holder.push(value);
        }
    })
    return holder;
}

console.log(strNum(strings))