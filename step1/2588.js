//          4 7 2 - (1)
//      X   3 8 5 - (2)
//   --------------
//        2 3 6 0 - (3)
//      3 7 7 6   - (4)
//    1 4 1 6     - (5)
//   -------------- 
//    1 8 1 7 2 0 - (6)

// 첫째 줄에 (1)의 위치에 들어갈 세 자리 자연수가,
// 둘째 줄에 (2)의 위치에 들어갈 세자리 자연수가 주어진다.
// 첫째 줄부터 넷째 줄까지 차례대로 (3), (4), (5), (6)에 들어갈 값을 출력한다.
// 예제 입력 : 472, 385
// 예제 출력 : 2360, 3776, 1416, 181720

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let a = Number(input[0]);
let b = Number(input[1]);

let c = b % 10;
let d = Math.floor((b % 100) / 10);
// 385 % 100 = 85
// 85 / 10 = 8.5
// Math.floor(8.5) = 8
let e = Math.floor(b / 100);

console.log(a * c);
console.log(a * d);
console.log(a * e);
console.log(a * b);
