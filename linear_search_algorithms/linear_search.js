function linearSearch(arr,t) {
    if(arr.includes(t)) {
        return true
    }
    else {
        return -1
    }
}
const array = [1,2,3,4,5,6,7]
// Big O notation O(n)
console.log(linearSearch(array,5))
console.log(linearSearch(array,8))