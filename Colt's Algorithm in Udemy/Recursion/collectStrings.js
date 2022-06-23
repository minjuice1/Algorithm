/* collectStrings
Write a function called collectStrings which accepts an object
and returns an array of all the valuees in the object that have a typeof string
*/

const obj = {
	stuff: "foo",
	data: {
		val: {
			thing: {
				info: "bar",
				moreInfo: {
					evenMoreInfo: {
						weMadeIt: "baz",
					},
				},
			},
		},
	},
};

/* 순수 재귀함수 버전 */
function collectStrings(obj) {
	let newArr = [];

	for (let key in obj) {
		if (typeof obj[key] === "string") {
			newArr.push(obj[key]);
		} else if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
			newArr = newArr.concat(collectStrings(obj[key]));
		}
	}

	return newArr;
}

/* helper 재귀함수 버전 */
function collectStrings(obj) {
	let newArr = [];

	function helper(o) {
		for (let key in o) {
			if (typeof o[key] === "string") {
				newArr.push(o[key]);
			} else if (typeof o[key] === "object") {
				return helper(o[key]);
			}
		}
	}

	helper(obj);

	return newArr;
}

collectStrings(obj); // ["foo", "bar", "baz"])
