// const findCharCount = (stringVal) => {
//     let obj = {}
//     for(let i=0; i<stringVal.length; i++){
//         obj[stringVal[i]] ? obj[stringVal[i]]++ : obj[stringVal[i]] = 1
//     }
//     console.log("charCount1", obj);
//     console.log('Object.keys(obj)', Object.keys(obj));
//     for(let tik of Object.keys(obj)){
//         if(obj[tik] === 1){
//             console.log("tik", tik);
//             return stringVal.indexOf(tik)
//         }
//     }
//     return -1
// }
// console.log("findCharCount", findCharCount('anandss'));

const findCharCount = (str) => {
    let obj1 = {};
    for(let i=0; i<str.length; i++){
        obj1[str[i]] ? obj1[str[i]]++ : obj1[str[i]] = 1
    }
    console.log(obj1);
    for(let key of Object.keys(obj1)){
        if(obj1[key] == 1){
            console.log(key, str.indexOf(key));
        }
    }
}

findCharCount('ananadshendage')