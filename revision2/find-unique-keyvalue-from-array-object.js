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

let newArray = new Map();
for (let obj of rawArray){
    newArray.set(obj.name, obj )
}
console.log(newArray);
console.log([...newArray.values()]);
