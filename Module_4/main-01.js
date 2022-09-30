/*
Instructions
Compare Objects
- Define a function, `compareCities`, that accepts two objects as arguments.

compareCities({ name: 'Dresden' }, { name: 'Dresden' }) // -> true
compareCities({ name: 'Raleigh' }, { name: 'Raleigh', income_pc: 1200000 }) // -> false
*/
function compareCities(c1, c2) {
    // Add your code here
    if('name' in c1 === 'name' in c2) {
        return true;
    }
    else {
        return false;
    }
  }
  
  //uncomment next lines to console log results
  console.log(compareCities({},{}))
  console.log(compareCities({name:'San Jose'},{name:'San Jose'}))
  console.log(compareCities({name:'San Jose'},{otherkey:'San Jose'}))
  
