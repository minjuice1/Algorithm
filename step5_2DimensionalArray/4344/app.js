const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(file).toString().trim().split('\n');
let testCase = Number(input[0]);
// 학생들의 수 구하기 : console.log(input[2][0])

// 1. 점수를 모두 더해서 학생들의 수로 나누면 -> 그 줄의 평균 점수
// 2. 평균 점수를 넘은 학생이 7명중 4명이라 하면 -> (100/7)*4 = 57.143 (소수점 셋째 까지)

for (let i = 1; i <= testCase; i++) {
  let sum = 0;
  let count = 0;

  // 첫줄을 제외하고 각 줄의 값을 배열안에 담은 후, 숫자열로 변환
  let test = input[i].split(' ').map(n => Number(n));

  for (let j = 1; j <= test[0]; j++) {
    sum += test[j];
  }

  let avg = sum / test[0];

  for (let k = 1; k <= test[0]; k++) {
    // 만약에 각각의 점수가 avg보다 크다면, count에 추가.
    if(test[k] > avg) {
      count++;
    }
  }

  // 평균보다 큰 count(인원)를 각 줄의 학생 수로 나누고, 퍼센테이지를 구해서
  // 소수점 셋째 자리까지 출력
  console.log((count/test[0]*100).toFixed(3) + "%");
  
}
