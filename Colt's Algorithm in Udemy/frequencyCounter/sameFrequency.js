/* Given two positive integers, find out if the two numbers have the same frequency of digits
   Your solution MUST have the fllowing complexities */

function sameFrequency(num1, num2){
  num1 = String(num1)
  num2 = String(num2)
  
  if(num1.length !== num2.length) return false

  const lookup = {};

  for (let i = 0; i < num1.length; i++) {
    let letter = num1[i];
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
  }
  
  for(let i = 0; i < num2.length; i++) {
    let letter = num2[i];

    if(!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  return true;
}

sameFrequency(182, 281)
sameFrequency(34, 14)
sameFrequency(3589578, 5879385)
sameFrequency(22, 222)