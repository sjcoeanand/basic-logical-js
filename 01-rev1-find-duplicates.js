let sampleArray = [2,1,7,8,0,2,1,5,8];

// way1
let result = [...new Set(sampleArray)]

// way2
let result1 = sampleArray.filter((item, index)=>{
    if(sampleArray.indexOf(item) != index){
        return item
    }
})
console.log(result1);