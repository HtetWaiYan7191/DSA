function factorial(n) {
    let result = 1;
    if(n === 0) {
        return 1;
    }
    else {
        for(let i = n ; i > 0; i--) {
            result *= i ;
        }
    }
    
    return result;
}

//Big O notation O(n) only one for loop 

console.log(factorial(5))
console.log(factorial(4))
console.log(factorial(3))