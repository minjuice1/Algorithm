// 첫째 줄에 A와 B가 주어진다. (0 < A, B < 10)
// 첫째 줄에 A/B를 출력한다.
// 예제 입력 : 1 3
// 예제 출력 : 0.3333333333333333333

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');
let a = (input[0]);
let b = (input[1]);
console.log(a/b);