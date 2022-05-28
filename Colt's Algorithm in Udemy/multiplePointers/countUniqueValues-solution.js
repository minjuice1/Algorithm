/* Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array.
   There can be negative numbers in the array, but it will always be sorted */

function countUniqueValues(arr){
  var i = 0;
  for (var j = 1; j < arr.length; j++) {
    if(arr[i] !== arr[i]) {
      i++;
      arr[i] = arr[i]
    }
  }
  return i + 1;
}

countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])
countUniqueValues([-2, -1, -1, 0, 1])
countUniqueValues([])
