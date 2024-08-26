let rawArray = [2,3,4,2,22,3,4];
function findDuplicates(arr){
   return arr.filter((val, i) => arr.indexOf(val) !== i)
}
console.log('dups', findDuplicates(rawArray));

let rawArray1 = [2,3,4,2,22,3,4];
function findUnique(arr){
    return arr.filter((val) => arr.indexOf(val) == arr.lastIndexOf(val))
 }
 console.log('unique', findUnique(rawArray1));
