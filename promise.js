const promise1 = new Promise((resolve, reject)=>{
    resolve("Promise1 Resolved")
    reject("Promise1 Rejected")
})

const prom2 = Promise.resolve("prom2 resolved")
const prom3 = new Promise((resolve, reject)=>{
    resolve('Promise 3 resolved')
    reject("Prom3 rejected")
})

Promise.all([promise1, prom2, prom3]).then((res)=>{
    console.log("then => ", res);
})
.catch((res)=>{
    console.log("catch => ", res);
})