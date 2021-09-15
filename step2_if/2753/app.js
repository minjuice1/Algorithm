const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(file).toString().split('\n');

input = input[0];
input = input.split(' ').map((item) => Number(item));

solution(input[0], input[1]);

function solution(A) {
  if(A % 4 === 0 && A % 100 != 0){
      console.log("1")
  } else if(A % 4 === 0 && A % 400 === 0){
    console.log("1")
  } else {
    console.log("0")
}
}