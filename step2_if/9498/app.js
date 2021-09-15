const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(file).toString().split('\n');

input = input[0];
input = input.split(' ').map((item) => Number(item));

solution(input[0], input[1]);

function solution(A) {
  if(A >= 90){
    console.log('A')
  } else if (80 <= A && A < 90) {
    console.log('B')
  } else if (70 <= A && A < 80) {
    console.log('C')
  } else if (60 <= A && A < 70) {
    console.log('D')
  } else {
    console.log('F')
  }
}