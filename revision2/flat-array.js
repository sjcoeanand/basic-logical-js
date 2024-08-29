let a = [[[2,3],[31,5],2,[5,11]]];
// console.log('flat array => ', a.flat(Infinity));
// function flatArray1(arr){
//     let flatStack = [];
//     for(let i=0; i < arr.length; i++){
//         if(typeof arr[i] == 'object' ){
//             flatArray(arr[i])
//         } else {
//             flatStack.push(arr[i])
//         }
//     }
//     console.log("flatStack", flatStack);
//     return flatStack
// }

function flatArray(arr){
    return arr.reduce((acc, currItem)=>{
        if(Array.isArray(currItem)){
            acc = acc.concat(flatArray(currItem))
        } else {
            acc.push(currItem)
        }
        return acc
    },[])
}

console.log(flatArray(a));

