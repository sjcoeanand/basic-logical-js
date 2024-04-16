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

const recursiveSearch = (obj, r = []) => {   
   Object.keys(obj).forEach(key => {
      let value = obj[key]
      if(typeof value !== 'object'){
         r.push(key);
      } else if(typeof value === 'object'){
          r.push(key)
         recursiveSearch(value, r);
      }
   });
   return r;
};
result = recursiveSearch(obj1)

console.log(result)


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

 const recursiveSearch1 = (obj, searchKey, results = []) => {
    const r = results;
    Object.keys(obj).forEach(key => {
       const value = obj[key];
       if(key === searchKey && typeof value !== 'object'){
          r.push(value);
       }else if(typeof value === 'object'){
          recursiveSearch1(value, searchKey, r);
       }
    });
    return r;
 };
 console.log(recursiveSearch1(people, 'age'));