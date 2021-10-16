const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(file).toString();
let words = input.trim().split(" ");
let count = 0;

for (let i = 0; i < words.length; i++) {
  if (words[i] !== '') {
    count++;
  }
}

console.log(count);