// 두 자연수 A와 B가 주어진다. (1 ≤ A, B ≤ 10,000)
// 첫째 줄에 A+B, 둘째 줄에 A-B, 셋째 줄에 A*B, 넷째 줄에 A/B, 다섯째 줄에 A%B를 출력한다.
// 예제 입력 : 7 3
// 예제 출력 : 10, 4, 21, 2, 1

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');
let a = Number(input[0]);
let b = Number(input[1]);
console.log(a+b);
console.log(a-b);
console.log(a*b);
// 정수만을 출력하기 때문에 소수점을 없애줘야 함.
// console.log(Math.floor(a/b));
console.log(parseInt(a/b));
console.log(a%b);