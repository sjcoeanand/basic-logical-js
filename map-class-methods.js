let a = {
    name : 'Anand 11',
    10 : 'SSE1',
    true : '21'
}
let b = new Map([
    ['name', 'Anand 22'],
    [11, 'SSE2'],
    [true, '22']
    ])
console.log(a.true)
console.log(b.get(true))