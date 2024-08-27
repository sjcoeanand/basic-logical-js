let arr = [2,4,1,3,43,123,341,12];
let sorted = arr.sort((a,b)=>{
     return (a-b)
})
console.log('sorted smallest',sorted);
console.log('sorted smallest',sorted[0]);
console.log('sorted larges',sorted[sorted.length - 1]);
