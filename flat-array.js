let a = [[[2,3],[31,5],2,[5,11]]]
  
//   let b1 = a.reduce((a,b)=>{
//      return a.concat(b)
//   }).reduce((x, y)=>{
//       return x.concat(y)
//   })
function flatArr(arr){
    let baseArray = arr.reduce((acc, item)=>{
        if(Array.isArray(item)){
            acc = acc.concat(flatArr(item))
        } else {
            acc.push(item)
        }
        return acc
    }, [])
    return baseArray
}
// let b1 = a.flat(Infinity)
let b1 = flatArr(a)
  console.log('b', b1)
  
  