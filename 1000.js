// 첫째 줄에 A와 B가 주어진다. (0 < A, B < 10)
// 첫째 줄에 A+B를 출력한다.
// 예제 입력 : 1 2
// 예제 출력 : 3

// JS로 값 입력받기 위해서는 fs모듈을 사용해야 함.
let fs = require('fs');
// 한 줄의 값을 입력받을 때 공백을 기준으로 문자를 나누어서 값을 저장하고,
// 값을 사용할 때는 배열의 인덱스를 이용.
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

let a = parseInt(input[0]); // 1
let b = parseInt(input[1]); // 2
console.log(a+b); // 1+2

