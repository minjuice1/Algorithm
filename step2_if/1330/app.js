const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');
// const input = fs.readFileSync('./input.txt').toString().split('\n');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(file).toString().split('\n');

input = input[0];
// input = input.split(' ').map((item) => +item);
input = input.split(' ').map((item) => Number(item));

solution(input[0], input[1]);

function solution(A, B) {
  if (A > B){
    console.log('>')
  }
  if (A < B) {
    console.log('<')
  }
  if ( A === B) {
    console.log('==')
  }
}

