// Instructions
// - Given the following 6 empty functions, add the right return statement to each of them to complete the activity
// Please do not change any of the function names

//This is your starting array
const arr = [10, 10, 16, 12];

function returnFirst(arr) {
  // return the first item from the array
  return arr[0];
}

function returnLast(arr) {
  // return the last item of the array
  return arr[3];
}

function getArrayLength(arr) {
  // return the length of the array
  return arr.length;
}

function incrementByOne(arr) {
  // arr is an array of integers(numbers), Increment all items in the array by
  // return the array
  arr[0] += 1;
  arr[1] += 1;
  arr[2] += 1;
  arr[3] += 1;
  return arr;
}

function addItemToArray(arr, item) {
  // add the parameter item to the end of the array arr
  // return the array
  arr.push(item);
  return arr;
}

function addItemToFront(arr, item) {
  // add the parameter item to the front of the array arr
  // return the array
  // hint: use the array method .unshift
  arr.unshift(item);
  return arr;
}

//uncomment these lines to check results in browser console
 console.log("returnFirst result:" + returnFirst(arr))
 console.log("returnLast result:" + returnLast(arr))
 console.log("getArrayLength result:" + getArrayLength(arr))
 console.log("incrementByOne result:" + incrementByOne(arr))
 console.log("addItemToArray result:" + addItemToArray(arr, 10))
 console.log("addItemToFront result:" + addItemToFront(arr, 10))