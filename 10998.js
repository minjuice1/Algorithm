// 첫째 줄에 A와 B가 주어진다. (0 < A, B < 10)
// 첫째 줄에 AxB를 출력한다.
// 예제 입력 : 1 2
// 예제 출력 : 2

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');
let a = parseInt(input[0]);
let b = parseInt(input[1]);
console.log(a*b);