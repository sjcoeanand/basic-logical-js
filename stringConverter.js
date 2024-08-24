function stringConverter(str){
  let op = [];
  for(let i=0; i<str.length ; i++){
      if(i === 0){
          op.push(str[i].toUpperCase())
      } else {
        if(str[i] === str[i].toUpperCase()){
        op.push(str[i])  
        } else {
          op[op.length -1] = op[op.length -1]+str[i]
        } 
      }
  }
  let op1 = op.join('_')
  return op
}

console.log(bracketMatcher("iAmTheOne"))