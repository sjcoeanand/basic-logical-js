let arr = [2,4,1,3,43,123,341,12]
// let b = arr.sort();
let b = () => arr.sort((a,b)=>{
    return (a-b)
})
let c = b()
console.log("b", c);
console.log("smallest", c[1]);
console.log("largest", c[arr.length - 2]);
