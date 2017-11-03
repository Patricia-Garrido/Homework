function different (arr1,arr2) {
	
	var notFound = false;
	printDifference(arr1, arr2);
	printDifference(arr2, arr1);
	
}
function printDifference(arr1, arr2) {
	var i = 0;
	var j = 0;
	var advanced = false;
	while (i < arr1.length && j < arr2.length) {
		if (arr1[i] === arr2[j]) {
			i++;
			j++;
			advanced = true;
		} else {
			let x;
			// Go thru every element in arr2 and check the
			// value of arr1[i] against it
			for (x = j; x < arr2.length; x++) {
				if (arr1[i] === arr2[x]) {
					break;
				}
			}
			if (x === arr2.length) {
				console.log(arr1[i]);
			}
		}
		if (advanced === false) {
			i++;
			j = 0;
			advanced = true;
		} else {
			advanced = false;
		}
	}		

}
var arr1 = [3,9,8,4];
var arr2 = [3,2,4,1];
different (arr1,arr2);
















