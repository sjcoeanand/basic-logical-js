async function testAsync(){
    console.log('Before fetch')
    await fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => res.json())
    .then(res1 => console.log('==>> ', res1))
    console.log('after fetch')
}
testAsync()