let sampleArray = [[[2,3],[31,5],2,[5,11]]];

function flattMyArray(arr){
    let result = arr.reduce((acc, item)=>{
        if(Array.isArray(item)){
            acc = acc.concat(flattMyArray(item))
        } else {
            acc.push(item)
        }
        return acc
    }, [])
    return result
}

console.log(flattMyArray(sampleArray));