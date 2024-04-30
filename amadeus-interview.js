for (var i = 0; i < 10; i++) {  
    console.log('var ' + i);
}
for (var i = 0; i < 10; i++) {​​​​​
  setTimeout(function() {​​​​​
    console.log('var ' + i);
  }​​​​​, 1000);
}
for (let i = 0; i < 10; i++) {​​​​​
  setTimeout(function() {​​​​​
    console.log('let ' + i);
  }​​​​​, 1000);
}
for (let i = 0; i < 10; i++) {​​​​​
  setTimeout(function() {​​​​​
    console.log('timeout 0 ' + i);
  }​​​​​, 0);
}
for (const i = 0; i < 10; i++) {​​​​​
  console.log('const ' + i);
}

var value = 1;
function hello() {
    var value = 3;
  console.log('value is ' + value);​​​​​
  return value + 1;
}​​​​​
console.log('hello is ' + hello());


let user = {
  name: 'hello',
  go: function() {
    console.log('user go: ' + this.name);
  }
};
user.go();