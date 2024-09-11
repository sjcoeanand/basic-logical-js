let b = [2,5,2,4,5,88,1,3,4];

function findUnique(arr){
    let result = arr.filter((x,i)=>{
        return arr.indexOf(x) == i
    })
    return result 
}
console.log('unique', findUnique(b));

function findDuplicates(arr){
    return arr.filter((x,i)=> {
        return arr.indexOf(x) !== i
    })
}
console.log('duplicates', findDuplicates(b));
