const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
// Num으로 바꿔야 공백없이 제대로 비교 가능.
let input = fs.readFileSync(file).toString().split('\n').map(n => Number(n));

let multi = String(input[0] * input[1] * input[2]);

let count;

for (let i = 0; i <= 9; i++) {
  count = 0;
  for(let j = 0; j < multi.length; j++) {
    if(multi[j] == i) {
      count++;
    }
  }
  console.log(count);
}



