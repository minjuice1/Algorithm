/* stringifyNumbers
Write a function called stringifyNumbers which takes in an object
and finds all of the values which are numbers and converts them to strings.
Recursion would be a great way to solve this!
*/

let obj = {
	num: 1,
	test: [],
	data: {
		val: 4,
		info: {
			isRight: true,
			random: 66,
		},
	},
};
/* 내가 작성한 코드 */
function stringifyNumbers(obj) {
	for (let key in obj) {
		if (typeof obj[key] === "object") {
			stringifyNumbers(obj[key]);
		} else if (typeof obj[key] === "number") {
			JSON.stringify(obj[key]);
		} else {
			obj[key];
		}
	}
	return obj;
}

/* udemy 솔루션 코드 */
function stringifyNumbers(obj) {
	let newObj = {};
	for (let key in obj) {
		if (typeof obj[key] === "number") {
			newObj[key] = obj[key].toString();
		} else if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
			newObj[key] = stringifyNumbers(obj[key]);
		} else {
			newObj[key] = obj[key];
		}
	}
	return newObj;
}

console.log(stringifyNumbers(obj));
