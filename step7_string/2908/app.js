const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(file).toString().split(' ');
// 734 893

// let num1 = Number(input[0].split('').reverse().join(''));
// let num2 = Number(input[1].split('').reverse().join(''));
let num1 = input[0].split('');
let num2 = input[1].split('');

num1 = num1.reverse();
num2 = num2.reverse();

num1 = Number(num1.join(''));
num2 = Number(num2.join(''));

console.log(num1 > num2 ? num1 : num2);