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

let recursiveSearch = (obj, result=[])=>{
    Object.keys(obj).forEach((key)=>{
        let value = obj[key];
        if(typeof value == 'object'){
            result.push(key)
            recursiveSearch(value, result)
        } else {
            result.push(key)
        }
    })
    return result
}

console.log(recursiveSearch(obj1));



// get values of speocific js object

const people = {
    Ram: {
       fullName: 'Ram Kumar',
       details: {
          age: 31,
          isEmployed: true
       }
    },
    Sourav: {
       fullName: 'Sourav Singh',
       details: {
          age: 22,
          isEmployed: false
       }
    },
    Jay: {
       fullName: 'Jay Grewal',
       details: {
          age: 26,
          isEmployed: true
       }
    }
 }


 let recursiveSearch1 = (obj, matchKey, result1=[])=>{
    Object.keys(obj).forEach((key)=>{
        let value = obj[key];
        if(typeof value !== 'object' && matchKey == key){
            result1.push(value)
        } else {
            recursiveSearch1(value, key, result1)
        }
    })
    return result1
}


console.log(recursiveSearch1(people, 'age'));