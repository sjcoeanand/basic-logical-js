let obj1 = {
    name : 'anand',
    age : 32,
    job : {
        dept : 'it',
        role : {
                sub : 'computer science'
        }
    }
}

function getObjectKeys(obj, result = []){
    Object.keys(obj).forEach(key => {
        let val = obj[key]
        if(typeof val == 'object'){
            result.push(key)
            getObjectKeys(val, result)
        } else {
            result.push(key)
        }
    })
    return result
}

console.log(getObjectKeys(obj1));