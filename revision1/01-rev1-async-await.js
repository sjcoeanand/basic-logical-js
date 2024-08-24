 async function callApi(){
    console.log('Hello Start')
     await fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => res.json())
    .then(res1 => console.log(res1))
    console.log('Hello End')
}

console.log(callApi())