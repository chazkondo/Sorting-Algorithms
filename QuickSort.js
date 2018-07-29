var MODULE = (function () {
// Quick sort

function quickSort(origArray) {
	if (origArray.length <= 1) { 
		return origArray;
	} else {

		let left = [];
		let right = [];
		let newArray = [];
		let pivot = origArray.pop();
		let length = origArray.length;

		for (let i = 0; i < length; i++) {
			if (origArray[i] <= pivot) {
				left.push(origArray[i]);
			} else {
				right.push(origArray[i]);
			}
		}
//         console.log('this is the left', left)
//         console.log('this is the right', right)
		return newArray.concat(quickSort(left), pivot, quickSort(right));
	}
}

let myArray = [3, 0, 2, 5, -1, 4, 1 ];

// console.log("Original array: " + myArray);
// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);

console.log(quickSort(myArray))
	
	  return{quickSort:quickSort};
	  
	}());
	