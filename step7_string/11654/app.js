const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(file).toString().split('\n');
let str = input[0];

console.log(str.charCodeAt(0));

// 반대의 경우
// String.fromCharCode(65);  // 'A';