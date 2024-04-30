const isPrime = (num) => {
    if(num < 2){
        console.log(`${num} is not prime number` );
        return false
    }
    if(num > 1){
        for(let i = 2; i < num; i++){
            if(num % i == 0){
                console.log(`${num} is not prime number` );
                return false
            }
        }
    }
    console.log(`${num} is prime number`);
    return true
}

isPrime(4)