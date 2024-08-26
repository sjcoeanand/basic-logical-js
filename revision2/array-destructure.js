const edibles = ["food", "fruits"];

let [first, second] = edibles;
console.log(first, second);

let rectangle = {
    coordinates: [10, 20, 100, 100],
    color: 'red', 
    label: 'first object',
    price: 120
}

let {coordinates : [l,w,v,t]} = rectangle;
function consoler(val){
    console.log('coordinates', val);
}
consoler(w)

let cricl = ['anand', 'sushant', 'kiran'];
let [i,j,k] = cricl;
console.log('i',i);
console.log('j',j);
console.log('k',k);
