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

let mappedObject = new Map();
for(let item of rawArray){
    mappedObject.set(item.name, item)
}
console.log(mappedObject);
let uniqueResult = [...mappedObject.values()];
let sortedResult = uniqueResult.sort((x, y)=> x.std - y.std)

console.log('uniqueResult', uniqueResult);
console.log('sortedResult', sortedResult);