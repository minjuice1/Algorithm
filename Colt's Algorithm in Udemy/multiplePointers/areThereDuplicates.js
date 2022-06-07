/* Implement a function, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.
   You can solve this using the frequency counter pttern OR the multiple pointers pattern */

// function areThereDuplicates() {
//   return new Set(arguments).size!== arguments.length;
// }

function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}


areThereDuplicates(1, 2, 3)
areThereDuplicates(1, 2, 2)
areThereDuplicates('a', 'b', 'c', 'a')