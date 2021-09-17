const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(file).toString().split('\n');

let result = '';
let start = Number(input[0])
for (let i = start; i >= 1; i--){
  result += (i + "\n")
}
console.log(result);

