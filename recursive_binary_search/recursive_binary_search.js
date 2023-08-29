function recursiveBinarySearch(arr,t,start=0, right=arr.length - 1 ) {
    if(start > right) {
        return -1
    }

    let mid = Math.floor((start + right)/2)
    if(arr[mid] === t) {
        return mid
    }

    if(arr[mid] < t) {
     return recursiveBinarySearch(arr,t,mid+1,right)
    } else {
       return recursiveBinarySearch(arr,t,start,mid-1)
    }
}
//Big O notation => O(logn)
const arr = [-5,2,4,6,10];
const arr2 = [-5,2,4,6,12];
console.log(recursiveBinarySearch(arr,10))
console.log(recursiveBinarySearch(arr2,10))
