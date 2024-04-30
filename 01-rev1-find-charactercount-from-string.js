let string1 = 'welcome to our company'

function findCharLength(str){
    let str1 = str.split(' ').join('')
    let sampleObject = {};
    for(let i=0; i<str1.length; i++){
       !sampleObject[str1[i]] ? sampleObject[str1[i]] = 1: sampleObject[str1[i]]++
    }
    console.log('sampleObject', sampleObject)
    for(let key of Object.keys(sampleObject)){
        if(sampleObject[key] == 1){
            return key
        }
    }
}
console.log(findCharLength(string1))