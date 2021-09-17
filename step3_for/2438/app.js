const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(file).toString().split('\n');

let result = '';
for (let i = 1; i <= input[0]; i++){
  result += "*";
  console.log(result);
}
