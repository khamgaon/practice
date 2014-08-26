function isPrime(numbr) {
    for (var i = 2; i < numbr - 1; i++) {
        if (numbr % i === 0) {
            return "The number is not prime";
        } 
    } 
    return "the number is prime";
}

console.log(isPrime(117));
