const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(file).toString();

let plus = 0
let count = 0;
let num = Number(input);
let trueOrfalse = true; 

// 2+6 = 8
// 1. 6+8 = 14
// 2. 8+4 = 12
// 3. 4+2 = 6
// 4. 2+6 = 8

while(trueOrfalse) {
    count++;

    // 예시 input 26
    // (26/10) + (26%10) => 2(2.666) + 6 => 2 + 6 => 8
    plus = Math.floor(num/10) + (num % 10);
    console.log(plus)
    // (26%10)* 10 + (8%10) => 60 + 8 => 68
    num = (num % 10) * 10 + (plus % 10);
    
    if(num == input){
        console.log(count);
        trueOrfalse = false;
    }
  }

