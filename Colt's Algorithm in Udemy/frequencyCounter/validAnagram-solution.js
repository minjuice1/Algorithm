function validAnagram(arr1, arr2) {
  
  if(arr1.length !== arr2.length) return false

  const lookup = {};

  for (let i = 0; i < arr1.length; i++) {
    let letter = arr1[i];
    console.log(letter)
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
  }
  console.log(lookup)
  
  for(let i = 0; i < arr2.length; i++) {
    let letter = arr2[i];

    if(!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  return true;
}

validAnagram('aaz', 'zsa')