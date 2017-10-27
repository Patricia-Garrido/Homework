
function insertMiddle (arr1){
	var b = 7;
	var middle = Math.floor(arr1.length/2);
	for (var i=0; i<arr1.length; i++){
		if (i === middle) {
			arr1[i] = b;
		}
	}
	return b;
}
var arr1 = [1,2,3,4,5];
var x = insertMiddle (arr1);
console.log ('the new array with the middle number is ' + x);
