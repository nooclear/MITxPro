//Array flattenr activity
// Define a function arrayFlattener with a 2 dimensional array as parameter:
// example of 2 dimensional array: [1,[2,3],4,5]

function arrayFlattener(arr) {
    let arr2 = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].length > 1) {
            for(let x = 0; x < arr[i].length; x++) {
                arr2.push(arr[i][x]);
                // console.log(arr[i][x]);
            }
        } else {
            arr2.push(arr[i]);
            // console.log(arr[i]);
        }
    }
    return arr2;
}

//Return a new 1 dimensional array like, [1,2,3,4]

//your code here

//uncomment next line one by one, then check the console for results
console.log(arrayFlattener([1,[2,3],4,5]))

