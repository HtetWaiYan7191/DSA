function NumberOfWays(n) {
    const NumberOfWays = [1, 2];

    for(let i = 2; i<= n ; i++) {
        NumberOfWays[i] = NumberOfWays[i-1] + NumberOfWays[i-2]
    }

    return NumberOfWays[n-1]
}

// Big O notation O(n)
console.log(NumberOfWays(1))
console.log(NumberOfWays(2))
console.log(NumberOfWays(3))
console.log(NumberOfWays(4))
console.log(NumberOfWays(5))