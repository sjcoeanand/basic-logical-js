// [a,n,a,n,d]
function findCharCount(str) {
    let stack = {};
    for(let char of str){
        if(stack[char] == undefined){
            stack[char] = 1
        } else{
            stack[char] = stack[char]+1
        }
    }
    console.log('findCharCount', stack);
    let uniqueChar = [];
    for(let key of Object.keys(stack)){
        if(stack[key] === 1){   
            uniqueChar.push(key)
        }
    }
    return uniqueChar
}

console.log('unique char = ', findCharCount('anandshendage'));
