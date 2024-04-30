let arr = [2,4,1,3,43,123,341,12]
let result = arr.sort((x, y)=> x-y)
console.log('sorted Array = ', result);
console.log('nth Smallest = ', result[0]);
console.log('nth Largest = ', result[result.length-1]);