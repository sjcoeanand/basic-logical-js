let a = [2,3,51,3,1,2]
function test(a1){
    let b2 = a1.filter((x,i)=>{
        if(a1.indexOf(x) != i){
            return x
        }
    })
    console.log(b2)
    return b2
}
test(a)