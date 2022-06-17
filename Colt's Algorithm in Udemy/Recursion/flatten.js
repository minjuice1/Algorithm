/* flatten
Write a recursive function called flatten which accepts an array of arrays
and returns a new array with all values flattened
*/

// helper함수 사용한 솔루션
function flatten(array) {
	let newArr = [];

	function helper(array) {
		for (let i = 0; i < array.length; i++) {
			let element = array[i];

			if (Array.isArray(element)) {
				helper(element);
			} else {
				newArr.push(element);
			}
		}
	}
	helper(array);
	return newArr;
}

// concat 사용한 솔루션
function flatten(oldArr) {
	var newArr = [];
	for (var i = 0; i < oldArr.length; i++) {
		if (Array.isArray(oldArr[i])) {
			newArr = newArr.concat(flatten(oldArr[i]));
		} else {
			newArr.push(oldArr[i]);
		}
	}
	return newArr;
}

flatten([1, 2, 3, [4, 5]]); // [1, 2, 3, 4, 5]
flatten([1, [2, [3, 4], [[5]]]]); // [1, 2, 3, 4, 5]
flatten([[1], [2], [3]]); // [1,2,3]
flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]); // [1,2,3]
