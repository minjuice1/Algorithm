// 첫째 줄에 A, B, C가 순서대로 주어진다. (2 ≤ A, B, C ≤ 10000)
// 첫째 줄에 (A+B)%C, 둘째 줄에 ((A%C) + (B%C))%C,
// 셋째 줄에 (A×B)%C, 넷째 줄에 ((A%C) × (B%C))%C를 출력한다.
// 예제 입력 : 5 8 4
// 예제 출력 : 1, 1, 0, 0

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');
let A = parseInt(input[0]);
let B = parseInt(input[1]);
let C = parseInt(input[2]);

//let A = Number(input[0]);
//let B = Number(input[1]);
//let C = Number(input[2]);

console.log((A+B)%C);
console.log(((A%C) + (B%C))%C);
console.log((A*B)%C);
console.log(((A%C) * (B%C))%C);