let a = [2,3,51,3,1,2]
function test(a1){
    let b1 = []
    let b2 = []
    for(let i=0; i<a1.length; i++){
     if(b1.includes(a1[i]))   {
         b2.push('duplicate')
     } else {
         b1.push(a1[i])
         b2.push('-')
     }
    }
    console.log(b2)
    return b2
}
test(a)