const fizz = 3;
const buzz = 5;
const bazz = 7;

for(let i = 1; i <= 100; i++) {
    if(i % fizz === 0) {
        if(i % buzz === 0) {
            console.log(i + ': fizzbuz');
        } else {
            console.log(i + ': fizz');
        }
    } else if (i % buzz === 0) {
        console.log(i + ': buzz');
    } else if (i & bazz === 0) {
        console.log(i + ': bazz');
    } else {
        console.log(i);
    }
}