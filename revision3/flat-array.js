let a = [34,4,[3,6,[7,8,10,]], 9,[41, [99, 21, 7 ,[89, [69]]]]]
let a1 = [34,4,[3,6,[7,8,10,]], 9,[41, [99, 21, 7 ,[89]]]]

function flatNestedArray(nestArr){
    let result = [];
    for(let i=0; i <nestArr.length; i++){
        if(Array.isArray(nestArr[i])){
            result = result.concat(flatNestedArray(nestArr[i]))
        } else {
            result.push(nestArr[i])
        }
    }
    return result
}

function flatArrayUsingReduce(nestArr1){
    let result = nestArr1.reduce((acc, curr)=>{
        if(Array.isArray(curr)){
            acc = acc.concat(flatArrayUsingReduce(curr))
        } else {
            acc.push(curr)
        }
        return acc
    },[])
    return result
}

console.log('array', flatNestedArray(a));
console.log('array using reduce', flatArrayUsingReduce(a1));
