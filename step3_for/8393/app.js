const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(file).toString().split('\n');

let num = 0;
for (let i = 1; i <= input[0]; i++){

  num += i;
}
console.log(num);
