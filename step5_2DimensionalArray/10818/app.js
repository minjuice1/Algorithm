const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(file).toString().split('\n');

let inputs = Number(input[0].split(' '));
let num = input[1].split(' ').map(x => Number(x));

let max = num[0];
let min = num[0];
for(let i = 1; i < inputs; i++){
  if (min > num[i]) {
    min = num[i];
  }

  if (max < num[i]) {
    max = num[i];
  }
}
console.log(`${min} ${max}`);
