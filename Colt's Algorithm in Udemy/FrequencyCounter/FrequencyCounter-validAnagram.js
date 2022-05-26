function validAnagram(arr1, arr2) {
  let alpha1 = [];
  let alpha2 = [];
  let index1 = 0;
  let index2 = 0;
  
  if(arr1 === '' && arr2 === '') return true
  
  for(let i = 0; i < arr1.length; i++) {
    alpha1[index1++] = arr1[i]
  }
  for(let i = 0; i < arr2.length; i++) {
    alpha2[index2++] = arr2[i]
  }
  alpha1.sort((a, b) => a - b);
  alpha2.sort((a, b) => a - b);
  for(let i = 0; i < arr1.length; i++) {
    if(alpha1[i] !== alpha2[i]) {
      return false
    }
  }
  return true;
}

validAnagram('', '')
validAnagram('aaz', 'zza')
validAnagram('anagram', 'nagaram')
validAnagram('qwerty', 'qeywrt')