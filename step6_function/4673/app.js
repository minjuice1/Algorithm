// 입력받는 값 없음

// 셀프넘버 : 생성자가 없는 수

// 33은 39의 생성자, 39는 51의 생성자, 51은 57의 생성자
// 33 => 33 + 3 + 3 = 39 => 39 + 3 + 9 + = 51 => 51 + 5 + 1 = 57
// 101은 생성자가 2개 (91과 100)
// 91 => 91 + 9 + 1 = 101 , 100 => 100 + 1 + 0 + 0 = 101

// 1. 주어진 값을 배열로 만들어서 (array는 1부터 시작하기에, 10001의 배열을 만들어준다.)
// 2. 생성자를 갖는 숫자들과 (false로 넣고)
// 3. 생성자를 갖지 않는 수, 셀프넘버를 구하고
// 4. 배열을 돌면서 true(셀프넘버)만 출력하면 됨.

function d(n) {
  // ex) 값이 52라면
  let num = n;
  let sum = num; // 52

  while(num > 0) {
    // 위의 sum에서 52받아와 + 되고,
    sum += num % 10; // num % 10 = 2 여서 총 54
    num = parseInt(num / 10); // 5
  }
  return sum;
}

const range = 10000;
const selfNumArr = new Array(range);
// 10000개의 숫자를 넣은 배열을 생성 (초기값은 false로)
selfNumArr.fill(false);

for (let i = 1; i <= range; i++) {
  // d(i)의 숫자들은 true로 변경
  selfNumArr[d(i)] = true;
  if (!selfNumArr[i]) {
    // false인 셀프넘버만 출력
    console.log(i)
  }
}