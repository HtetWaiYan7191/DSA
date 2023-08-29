function binarySearch(arr,t) {
    arr.sort((a,b) => a-b);
    console.log(arr)
    let leftIndex = 0
    let rightIndex = arr.length - 1 ;

    while(leftIndex <= rightIndex) {
        let midIndex = Math.floor((leftIndex + rightIndex)/2);
        if(arr[midIndex] === t) {
            return midIndex
        }
        if(arr[midIndex] < t) {
           leftIndex = midIndex + 1
        } else {
            rightIndex = midIndex - 1
        }
    }
    return -1

}
//Big O notation O(logn)
const arr = [2,4,-5,6,10];
console.log(binarySearch(arr,10))