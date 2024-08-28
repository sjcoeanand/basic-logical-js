// Spread Operators - is use to expand or spread elements from an iterable to individual elements.
// Use of spread operator
//1) copying an array
//2) Merging an array
//3) Passing mutliple arguments to function

let a = 'I am Spread Operator';
console.log('spread result 1 = ',...a);

let b = [2,4,5,3,1];
console.log('spread result 2 = ',...b);

let c = [32,4,21];
let c1 = [...c];
console.log('c1 copy = ', c1);

let d = [...b, ...c];
console.log('Merge 2 array', d);

function passArray(val1, val2, val3){
    console.log('val1 in function = ', val1);
    console.log('val2 in function = ', val2);
    console.log('val3 in function = ', val3);
}
passArray(...c)

// ====================================================================
// Rest Operator - Rest operator is used in function parameter to collect all remaining arguments into array.
display(...b);
function display(val1, val2, ...params) {
    console.log('val1 in function with rest = ', val1);
    console.log('val2 in function with rest = ', val2);
    console.log('params in function with rest = ', params);
}

