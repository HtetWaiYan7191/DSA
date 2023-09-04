function recursiveStaircase(n){
    if(n < 2 ) return 1;

    return recursiveStaircase(n-1) + recursiveStaircase(n-2)
}

console.log(recursiveStaircase(1))
console.log(recursiveStaircase(2))
console.log(recursiveStaircase(3))
console.log(recursiveStaircase(4))
console.log(recursiveStaircase(5))
