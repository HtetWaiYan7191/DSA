function prime(n) {
    if(n < 2) {
        return false
    }

    for(let i = 2; i<=Math.sqrt(n) ; i++) {
        if(n % i === 0) {
            return false
        }
    }
    return true
}
// Big O notation => O(sqrt(n))
console.log(prime(3))
console.log(prime(4))