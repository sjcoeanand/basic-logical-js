let arr = [{
    name : 'anbnd', age : 33
}, { name : 'anand', age : 22}, {name : "ankit", age : 32}, {name : 'samit', age: 11}]

// for numeric sort
// const b = arr.sort((a,b)=>{
//     return a.age - b.age
// })

// for string sort
const b = arr.sort((a,b)=>{
    // return (a.name > b.name) ? 1 : ((a.name < b.name) ? -1 : 0)
    return b.name.localeCompare(a.name)
})
console.log(b);