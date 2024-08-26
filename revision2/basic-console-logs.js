for (var i = 0; i < 10; i++) {  
    console.log('var ' + i);
}
// o/p - prints 0 to 9
for (var i = 0; i < 10; i++) {​​​​​
  setTimeout(function() {​​​​​
    console.log('var ' + i);
  }​​​​​, 1000);
}
// o/p - prints 10 times 10

for (let i = 0; i < 10; i++) {​​​​​
  setTimeout(function() {​​​​​
    console.log('let ' + i);
  }​​​​​, 1000);
}
// o/p - prints 0 to 9
for (let i = 0; i < 10; i++) {​​​​​
  setTimeout(function() {​​​​​
    console.log('timeout 0 ' + i);
  }​​​​​, 0);
}
// o/p - prints 0 to 9 but as timeout 0 so it wull run first as compare to other settimeout of greater than 0
for (const i = 0; i < 10; i++) {​​​​​
  console.log('const ' + i);
}
//error for changing const val

var value = 1;
function hello() {
    var value = 3;
  console.log('value is ' + value);​​​​​
  return value + 1;
}​​​​​
console.log('hello is ' + hello());
// value is 3
// hello is 4

let user = {
  name: 'hello',
  go: function() {
    console.log('user go: ' + this.name);
  }
};
user.go();
// user go: hello

console.log(1 + + '2'+'2')
//32
console.log('1'+ 2 + '2')
//122
console.log('1'+ -1 + '2')
//1-12
console.log(+'1' + +'1' + '2')
//22
console.log('A' - '1'  +'2')
//NaN2
console.log('A'-'B'+2)
//NaN