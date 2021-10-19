const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString();
// WA

// ABC = 2, DEF = 3, GHI = 4, JKL = 5, MNO = 6, PQRS = 7, TUV = 8, WXYZ = 9

// 숫자 1을 걸려면 총 2초가 필요하고, 한 칸 옆에 있는 숫자를 걸기 위해선 1초씩 더 걸림.
// ex) 숫자 2를 걸려면 3초, 숫자 9는 10초.

let time = 0;

for (let i = 0; i < input.length; i++) {
	let asc = input.charCodeAt(i);
	if (asc >= 65 && asc < 68) {
		time += 3;
	} else if (asc >= 68 && asc < 71) {
		time += 4;
	} else if (asc >= 71 && asc < 74) {
		time += 5;
	} else if (asc >= 74 && asc < 77) {
		time += 6;
	} else if (asc >= 77 && asc < 80) {
		time += 7;
	} else if (asc >= 80 && asc < 84) {
		time += 8;
	} else if (asc >= 84 && asc < 87) {
		time += 9;
	} else if (asc >= 87 && asc < 91) {
		time += 10;
	}
}
console.log(time);
