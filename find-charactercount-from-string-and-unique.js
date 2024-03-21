const findCharCount = (stringVal) => {
    let obj = {}
    for(let i=0; i<stringVal.length; i++){
        obj[stringVal[i]] ? obj[stringVal[i]]++ : obj[stringVal[i]] = 1
    }
    console.log("charCount1", obj);
    console.log('Object.keys(obj)', Object.keys(obj));
    for(let tik of Object.keys(obj)){
        if(obj[tik] === 1){
            console.log("tik", tik);
            return stringVal.indexOf(tik)
        }
    }
    return -1
}
console.log("findCharCount", findCharCount('anandss'));