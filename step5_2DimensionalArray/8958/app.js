const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(file).toString().trim().split('\n');
let n = Number(input[0]);

// i = 1 을 해주는 이유는, 0부터 시작하면 input[0] 이어서 test case의 개수가 뜸.
for (let i = 1; i <=n; i++) {
  // 밖에서 변수를 생성해줄 경우, 모든 for문에 적용되기에 잘 못된 값이 나옴. 
  let sum = 0;
  let count = 0;
  
  for (let j = 0; j < input[i].length; j++) {
    // input[i][j]를 해서 O 또는 X 를 하나하나 출력
    // 문자가 "O" 이면 count에 1 추가, 아니면 0 (패스)
    if(input[i][j] === "O") {
      count++;
    } else {
      count = 0;
    }
    // count가 완전히 해결된 후에 sum에 count값을 누적시킨다.
    sum += count;
  }
  console.log(sum)
}