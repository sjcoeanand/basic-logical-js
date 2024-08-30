// let declaration and assigning
let a = {
    name: 'anand',
    std: 123,
    wrap: function (){
       return this
    }
}
console.log('wrap called', a.wrap());

a.age = 23
console.log(a);

a['division'] = a.std;
delete a.std
console.log('a', a);

const b = {
    name:'alon',
    std: 4
}
b.name = "ankit";
delete b.std;
console.log('b',b);
let c = { name: 'ankit' };
console.log('c',c);
console.log('c === b',c==b);

const a1 = {
    name : 'ani'
}
console.log("a1", a1);
a1 = {
    name : 'dan'
}
console.log("a1 after", a1);