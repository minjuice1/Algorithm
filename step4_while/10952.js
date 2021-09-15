// 각 테스트 케이스마다 A+B를 출력한다.
// 예제 입력 : 1 1 , 2 3 , 3 4 , 9 8 , 5 2 , 0 0
// 예제 출력 : 2, 5, 7, 17, 7

let fs = require('fs');
let input = fs.readFileSync('/input.txt').toString().split('/n');
let a = Number(input[0]);
let b = Number(input[1]);
console.log(input);


