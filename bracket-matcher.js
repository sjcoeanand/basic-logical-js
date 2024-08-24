// check if bracket of given string completes then return 1 or return 0

function bracketMatcher(str){
   let stack = [];
   for(let val of str){
        if(val === "("){
            stack.push(val)
        } else if(val === ")") {
            if(stack.length === 0){
                return 0
            } else {
                stack.pop()
            }
        }
   }
   return stack.length > 0 ? 0 : 1
}

console.log(bracketMatcher("(coder)(byte))"));


