let a = 5;

const arm = ()=>{
    for(let i=1; i<=a; i++){
        setInterval(() => {
            console.log("a", i);
        }, 2000);
    }
}
arm(a)


// use rest operator to pass n number of parameters to input
let print_names = function(...names) {
    for (let i=0; i<names.length; i++) {
        console.log(names[i]);
    }
}
print_names('anand', 'ankit', 'john', 'sandy', 'sam')