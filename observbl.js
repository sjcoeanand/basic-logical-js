const obs1 = new Observable(res =>{
    let counter = 0
    setTimeout(()=>{
        counter = counter + 1
        res.next(counter)
    }, 2000)
})

obs1.subscribe(result => console.log("counter ", result))