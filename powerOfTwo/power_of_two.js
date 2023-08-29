// function power_of_two (n) {
//     if ( n<1 ) {
//         return false
//     }

//     while(n > 1) {
//         if( n % 2 !== 0) {
//             return false
//         }
//         n = n/2
//     }
//     return true
// }

function powerOfTwoBitWise(n) {
    if(n < 1 ) {
        return false
    }

    return ( n & (n-1)) === 0
    // Big O notation O(1)
}

// Big O notation O(logn)
// console.log(power_of_two(4))
// console.log(power_of_two(6))
// console.log(power_of_two(32))