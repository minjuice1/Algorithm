const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
// 입력받은 문자배열을 숫자배열로 변환, Num으로 바꿔야 공백없이 제대로 비교 가능.
// trim()을 적용해야만 마지막에 공백 ''가 없음.
let input = fs.readFileSync(file).toString().trim().split('\n');

let check = [];
let num;

for (let i = 0; i < input.length; i++) {
  num = input[i] % 42;
  // 만약 check 인덱스 요소안에 num이 없을 경우, 배열안에 해당 값을 push
  if (check.indexOf(num) === -1) check.push(num);
}
console.log(check.length);

