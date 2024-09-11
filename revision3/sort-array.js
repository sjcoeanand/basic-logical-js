let a = [9,3,2,1,22,12]

function sortArray(arr){
    return arr.sort((a,b)=>{
       return a - b
    })
}
console.log('sorted array', sortArray(a));

