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
    'name' : 'manohar',
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

let mapEx = new Map();

for(let item of rawArray){
    mapEx.set(item.division, item)
}
console.log("map", mapEx);
let onlyValues = mapEx.values()
console.log("onlyValues", onlyValues);

let result = [...onlyValues]
console.log('result', result);