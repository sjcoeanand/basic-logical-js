// rectangle = {
//     coordinates: [10, 20, 100, 100],
//     color: 'red', 
//     label: 'first object',
//     price: 120
// }

// // OLD WAY
// const drawObject = (x, y, width, height, color, label, price) =>{ 
//     let rs = x + y + width + height + color +  label + price;
//     console.log(rs)
// };

// // old way
// drawObject(
//     rectangle.coordinates[0], 
//     rectangle.coordinates[1], 
//     rectangle.coordinates[2], 
//     rectangle.coordinates[3],
//     rectangle.color,
//     rectangle.label,
//     rectangle.price
// )

// new WAY destructuring


// swap values
const edibles = ["food", "fruits"];

let [first, second] = edibles;
[first, second] = [second, first];
console.log(first, second);