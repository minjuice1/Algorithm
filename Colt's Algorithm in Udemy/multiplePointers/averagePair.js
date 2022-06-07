/* Multiple Pointers - averagePair
write a function alled averagePair. Given a sorted array of
integers and a target average, determine if there is a pair of
values in the array where the average of the pair equals
the target average. There may be more than one pair that
matches the average target.*/


function averagePair(arr, aver){
  for(let i = 0; i < arr.length; i++) {
    for(let j = i + 1; j < arr.length; j++) {
      while(1) {
        if((arr[i] + arr[j]) / 2 === aver) return true
        break;
      }
    }
  }
  return false
}

averagePair([1,2,3],2.5) // true
averagePair([1,3,3,5,6,7,10,12,19],8) // true
averagePair([-1,0,3,4,5,6],4.1) // false
averagePair([],4) // false
