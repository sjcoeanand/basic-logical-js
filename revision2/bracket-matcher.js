function bracketMatcher(str){
    let stack = [];
    for(let char of str){
        if(char === '('){
            stack.push(char) 
        } else if(char === ')'){
            if(stack.length === 0){
                return 'Unmatched'
            } else {
                stack.pop()
            }
        }
    }
    return stack.length === 0 ? 'Matched' : 'Unmatched'
}
console.log(bracketMatcher('(((an)b)'));

