/* capitalizeWords
Write a recursive function called capitalizeFirst.
Given an array of strings, capitalize the all letter of each string in the array.
*/

function capitalizeWords(array) {
	if (array.length === 1) {
		return [array[0].toUpperCase()];
	}
	let res = capitalizeWords(array.slice(0, -1));
	res.push(array.slice(array.length - 1)[0].toUpperCase());
	return res;
}

capitalizeFirst(["car", "taco", "banana"]);
// ['CAR','TACO','BANANA']
