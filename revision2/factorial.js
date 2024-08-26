//factorial - 4 (eg 4*3*2*1 = 24)
function getFactorial(number){
    if(number === 0 || number === 1){
        return 1
    } else if(!Number.isInteger(number)){
        return 'Enter Whole number'
    } else {
        return number * getFactorial(number - 1)
    }
}
console.log(getFactorial(1));
