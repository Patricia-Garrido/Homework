function findDup (arr) {
	var arr1 = [];
	for(var i = 0; i < arr.length; i ++) {
		for(var j = i+1; j < arr.length; j ++) {
			if(arr[i] === arr[j]) arr1.push(arr[i]);
		}
	}
	return arr1;
}
var arr = [0, 7, 2, 5, 2, 5, 9, 10, 11, 10];
var a = findDup(arr);
console.log ("The duplicates in the array are " + a);
