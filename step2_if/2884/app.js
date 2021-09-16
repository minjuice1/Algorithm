const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(file).toString().split('\n');

input = input[0];
input = input.split(' ').map((item) => Number(item));

solution(input[0], input[1]);

function solution(H, M) {

  // 45분 일찍 알람 설정
  // M = M - 45;
  M -= 45;

  // 만약 45분을 빼서 -가 된다면
  if(M < 0){
    
    // 분에 60분을 더하고, 시에 -1

    // M += 60;
    M = M + 60;
    H --;

    // 만약 H가 -1 이라면, 그 전날인 23시로 변경
    if (H === -1){
      H = 23;
    }
  }
  console.log(H+ ' ' + M);
}
