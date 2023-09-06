function gcd(a,b) {
    if(b === 0) {
        return a
    }   else {
        let remider = a % b;
        return gcd(b, remider)
    }
   
}

console.log(gcd(48,18))
console.log(gcd(15,25))