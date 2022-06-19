/* capitalizeFirst
Write a recursive function called capitalizeFirst.
Given an array of strings, capitalize the first letter of each string in the array.
*/

function capitalizeFirst(arr) {
	let newArr = [];

	function helper(arr) {
		for (let i = 0; i < arr.length; i++) {
			let element = arr[i];
			for (let j = 0; j < 1; j++) {
				let capitalStr = element.charAt(0).toUpperCase() + element.slice(1);
				newArr.push(capitalStr);
			}
		}
	}
	helper(arr);
	return newArr;
}

function capitalizeFirst(arr) {
	let newArr = [];

	function helper(arr) {
		if (arr.length === 0) return;
		let str = arr[0];
		newArr.push(str[0].toUpperCase() + str.slice(1));
		return helper(arr.slice(1));
	}
	helper(arr);
	return newArr;
}

capitalizeFirst(["car", "taco", "banana"]);
// ['Car','Taco','Banana']
