/* Multiple Pointers - isSubsequence
Write a function called isSubsequence which takes in two strings
and checkes whether the characters in the first string form
a subsequence of the characters in the second string.
In other words, the function should check whether the characters
in the first string appear somewhere in the second string,
without their order changing */


function isSubsequence(string1, string2) {
  for(let i = 0; i < string2.length; i++) {
    if(string1[i] === string2[i]) {
      string1.replace(i)
    }
    return true;
  }
  if(string1.length !== 0) return false
}

isSubsequence('hello', 'hello world') // true
isSubsequence('sing', 'sting') // true
isSubsequence('abc', 'abracadabra') // true
isSubsequence('abc', 'acb') // false (order matters)

