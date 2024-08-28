//we can call regualr function before initialising because of hoisted function
//regular function has their own this value so incase of function called inside object refer to that object.
//here we always need to return a value if we want ot return a value
console.log("Regular Function", regularFunction());
function regularFunction(){
    console.log('this regular', this);    
    return 'Hello Normal Function'
}

// arrow functions are not hoisted so we need to write function defination and then only we cam call it.
// arrow function don't have its own this, it always inherit it from its parent scope
//arrow function have implicit return so we dont need to use return keyword everytime
let arrowFunction = () => {
    console.log('this arrow', this);    
    return 'Hello Arrow Function'
}
console.log("Arrow Function", arrowFunction());