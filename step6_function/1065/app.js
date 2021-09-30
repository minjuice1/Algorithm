const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(file).toString().split('\n');
let num = Number(input[0]);

// n은 1000보다 작거나 같은 자연수인데, 1000은 한수가 아니므로 패스

// n이 한자리 일 경우 => 1부터 9까지는 수가 하나밖에 없는 등차수열
// n이 두자리 일 경우 => 10부터 99까지도 등차수열이 될 수 밖에 없음. 11, 12, 13 등

// n이 세자리 일 경우 (100 ~ 999)=> 각 자리의 숫자를 구해서,
// 100의 자리 숫자 - 십의 자리 숫자 = 십의 자리 숫자 - 일의 자리 숫자 가 성립하면 count에 누적시킴.
// ex) 158이라면 1 - 5 = 5 - 8 => -4 = -3 이므로 해당 안됨
// ex) 456이라면 4 - 5 = 5 - 6 => -5 = -1 이므로 count에 누적!

function printHunsu(){
    let count = 0;
    // 1보다 크거나 같고, 1000보다 작거나 같은 수
    for (let i = 1; i <= num; i++) {
    let hun = Math.floor((i % 1000) / 100);
    let ten = Math.floor((i % 100) / 10);
    let one = i % 10;

    // 100보다 작은 수들(1-99)은 모두 등차수열이니, count에 누적
    if (i < 100) {
      count++;

      // 세자리 수 (100-999)
    } else if (100 <= i && i < 1000) {
      if (hun-ten === ten - one) {
        count++;
      }
    }
  }
  return count;
}
console.log(printHunsu(num));