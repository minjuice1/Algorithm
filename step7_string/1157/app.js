const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 1. 문자들을 구분하기 위해서는, 모두 대문자로 변경.
// 2. a-z까지의 배열을 생성.

// 3. 알파벳들을 charCodeAt()를 사용하여 숫자로 변환하고 a(65)만큼을 뺀,
// 그 숫자를 배열의 인덱스로 잡고, 1을 추가 해줌.
// ex) 알파벳이 a라면 65 - 65 = 0 이므로, 인덱스 0에 1추가.

// 4. indexOf()로 배열의 index max 값을 구하고,
// 5. for문을 사용했던 max 값을 Math.max()로 구해서,
// 6. 둘의 max 값을 비교하여, 중복이 있을 경우 "?"을 출력
// 7. 중복이 없다면, fromCharCode()를 이용하여 문자열로 변환.

let input = fs.readFileSync(file).toString().toUpperCase();

// a-z까지의 배열.
const array = new Array(26).fill(0);

// 해당 단어의 길이만큼 반복하면서 숫자로 변환된 알파벳들을 배열 인덱스로 적용.
for (let i = 0; i < input.length; i++) {
  array[input.charCodeAt(i) - 65] ++;
}

// console.log(array)
// [
//   3, 1, 0, 0, 0, 0, 0, 0,
//   0, 0, 0, 0, 0, 0, 0, 0,
//   0, 0, 0, 0, 0, 0, 0, 0,
//   0, 0
// ]

// 해당 배열에서 최댓값 : [3]
const max = Math.max(...array);

// 최댓값의 인덱스 : 0
const index = array.indexOf(max);

// max 와 index가 다른 알파벳일 경우, true로 변환시켜서 "?" 출력
let isSame = false;

for (let j = 0; j < 26; j++) {
  if (array[j] === max && index != j) {
    isSame = true;
    break;
  }
}
console.log(isSame ? "?" : String.fromCharCode(index + 65));


// 가장 많이 사용된 알파벳을 filter() 사용하여 구하는 코드.
// console.log(array.filter(val => val)) : [3, 1]
// console.log(array.filter(val => val === max)) : [3]
// console.log(array.filter(val => val === max).length) : 1

// 해당 배열에서 최댓값 : [3] 의 길이가 1일 경우, 문자열로 변환하여 출력
// max의 길이가 2 이상인 경우에는, 최댓값이 2개가 있다는 뜻이므로, "?" 출력

// const max = Math.max(...array);
// let result2 = array.filter(val => val === max).length === 1 ?
// String.fromCharCode(array.findIndex(val => val === max) + 65) : '?';
// console.log(result2);