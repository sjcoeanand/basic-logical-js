var obj = {"1":5,"2":7,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0}

let array = Object.keys(obj).map((x)=> [x, obj[x]])
console.log(array);