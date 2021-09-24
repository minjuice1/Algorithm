const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(file).toString().split('\n');
// console.log(input); // [ '1 1\r', '2 3\r', '3 4\r', '9 8\r', '5 2\r', '0 0' ]
// console.log(input[1]); // 2 3  (공백까지 포함)
// console.log(input[1][2]); // 3
// console.log(input[0][0]);
while (input[0][0] != 0) {
  const num = input.shift().split(" ");

  console.log(Number(num[0]) + (Number(num[1])));
  // console.log(+num[0] + +num[1]);
}