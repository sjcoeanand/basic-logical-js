let rawArray = [{
    'name' : 'Anand',
    'std' : 9,
    'division' : 'A',
    'percentage' : '99%'
},{
    'name' : 'Ankit',
    'std' : 9,
    'division' : 'A',
    'percentage' : '99.3%'
},{
    'name' : 'Anand',
    'std' : 9,
    'division' : 'A',
    'percentage' : '91%'
},{
    'name' : 'Amul',
    'std' : 10,
    'division' : 'C',
    'percentage' : '90%'
},{
    'name' : 'sandip',
    'std' : 8,
    'division' : 'C',
    'percentage' : '90%'
}]

// find unique object on the basis of standard from array of object
// let b = new Map();

// for(let obj of rawArray){
//     b.set(obj.std, obj)
// }
// console.log('b = ', b);
// let sample = b.values();
// let output = [...sample]
// console.log('output = ', output);


let mappedObject  = new Map()
for(let obj of rawArray){
    mappedObject.set(obj.name, obj)
}
console.log(mappedObject);