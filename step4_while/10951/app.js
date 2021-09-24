const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(file).toString().split('\n');

let i = 0;
while (input.length-1 > i) {
  const num = input[i].split(" ");
  console.log(Number(num[0]) +  Number(num[1]));
  i++;
}