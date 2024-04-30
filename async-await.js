// const fun1 = async function one(){
//     console.log("============Anand 1===================");
//      await fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(res=> res.json())
//     .then(json => {
//         let result =  json.filter((x, i)=>{
//             if(i < 1){
//                 return x
//             }
//         })
//         console.log(result);
//     })
//     console.log("============Anand 2===================");
// }
// fun1()


var value = 1;
function hello() {
  console.log('value is ' + value);​​​​​
  var value = 3;
  return value + 1;
}​​​​​
console.log('hello is ' + hello());