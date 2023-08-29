function recursiveFactorial(n) {
 if(n < 1 ) {
    return 1
 }
 return n * recursiveFactorial(n-1)
}
/// Big O notation O(n)
console.log(recursiveFactorial(5))
console.log(recursiveFactorial(0))