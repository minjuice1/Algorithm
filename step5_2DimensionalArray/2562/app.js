const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
// Num으로 바꿔야 공백없이 제대로 비교 가능.
let input = fs.readFileSync(file).toString().split('\n').map(n => Number(n));
console.log(input)

let max = input[0];
let maxIndex = 0;

for (let i = 1; i < 9; i++){
  if (max < input[i]){
    max = input[i];
    maxIndex = i;
  }
}
console.log(max);
console.log(maxIndex + 1);


