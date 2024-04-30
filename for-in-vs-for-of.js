let list = 'anurag';

for (let i in list) {
   console.log(i); // "0", "1", "2",
}

for (let i of list) {
   console.log(i); // "4", "5", "6"
}

// let list = [{name : 'anand', dep: 'digital engineering'}, {name : 'ankit', dep: 'mechanical engineering'}];

// for (let i in list) {
//    console.log(i.values);
// }

// for (let i of list) {
//    console.log(i);
// }