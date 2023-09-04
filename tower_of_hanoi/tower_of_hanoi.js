function towerOfHanoi(n,from, to, interface) {
    if(n === 1) {
        console.log(`Move disk 1 from ${from} to ${to}`)
        return
    }
    towerOfHanoi(n-1, from, interface, to)
    console.log(`Move disk ${n} from ${from} to ${to}`)
    towerOfHanoi(n-1, interface, to, from)
}

// towerOfHanoi(1, "A", "C", "B")
//Big O notation => O(2^n)
towerOfHanoi(3, "A", "C", "B")