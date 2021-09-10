// 첫째 줄에 A와 B가 주어진다. (0 < A, B < 10)
// 첫째 줄에 A+B를 출력한다.
// 예제 입력 : 3 2
// 예제 출력 : 1

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');
let [a, b] = input
console.log(a-b);

