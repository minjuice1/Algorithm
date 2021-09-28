const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(file).toString().split('\n');

let inputs = Number(input[0].split(' '));
let num = input[1].split(' ').map(x => Number(x));

let max = num[0];
let aver = 0;

for (let i = 0; i < inputs; i++) {
  if (max < num[i]) {
    max = num[i];
  }
  aver += (num[i])
}
console.log(((aver/max)*100)/inputs)