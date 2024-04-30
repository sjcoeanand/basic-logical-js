let list = [
    {name : 'anand', dep: 'digital engineering'}, 
    {name : 'ankit', dep: 'mechanical engineering'}
];

for(let item of list){
    console.log('for of ', item);
}

for(let item in list){
    console.log('for in ', item);
}