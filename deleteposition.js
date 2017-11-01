
function deletePosition (arr, postion){
	if (position > arr.length || position < 0 || position === null) {
		throw "bad position";
	}
	if (arr === null || arr.length === 0) {
		throw "bad array";
	}
	if (position === arr.length - 1) {
		arr[position] = null;
	}
	for (var i=position; i<arr.length; i++){
			arr[i] = arr[i+1];
	}
}
var arr = [1,2,3,4];
var position = 0;
deletePosition(arr, position)
console.log ('the array with the position deleted is ' + arr);
