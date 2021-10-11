const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(file).toString().split('\n');
let str = input[0];

const result = [];

// 아스키 코드에서 a-z는 97-122까지 97-122의 범위를 돌면서,
// String.fromCharCode => 메서드를 사용해서 a-z까지의 알파벳을 생성,
// str.indexOf => 배열에 해당 값이 있다면 그 값의 index를 넣자 (배열에 해당 값이 없다면, -1이 저절로 출력됨)
// result.push => push 메서드를 사용하여 result 배열에 추가.

for (let i = 97; i <= 122; i++) {
  result.push(str.indexOf(String.fromCharCode(i)))
}

// join으로 공백을 줘서, 출력 형식 맞추기
console.log(result.join(" "));