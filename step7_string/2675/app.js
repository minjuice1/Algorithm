const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(file).toString().split('\n');

let caseTest = Number(input[0]);
let result = '';

for (let i = 1; i <= caseTest; i++) {
    // 각 케이스에 반복되는 첫 번째 문자 R
    // 3
    let count = Number(input[i].split(' ')[0]);
    // 각 케이스의 문자열을 분리
    // ABC
    let cases = input[i].split(' ')[1];
    console.log(cases.length)
    // cases의 length를 반복
    // 0123
    for (let j = 0; j < cases.length; j++) {
        // 0,1,2,3,0,1,2,3
        // console.log(j);
        for (let k = 0; k < count; k++) {
            
            // R의 길이만큼 4번 반복 (012, 012, 012, 012)
            //console.log(k);

            // 0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3
            // console.log(j);
            
            console.log(result += cases[k])
        }
    }
    result += '\n';
}
// console.log(result);
