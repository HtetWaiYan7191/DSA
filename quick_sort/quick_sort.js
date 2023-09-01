function quickSort(arr) {
    if(arr.length < 2) {
        return arr
    }
    let pivot = arr[arr.length - 1];
    const leftArr = []
    const rightArr = []

    for(let i = 0; i<arr.length-1;i++) {
        if(arr[i] < pivot) {
            leftArr.push(arr[i])
        }
        else {
            rightArr.push(arr[i])
        }
    }
    return [...quickSort(leftArr) , pivot, ...quickSort(rightArr)]
}
const arr = [8, 20, -2, 4, -6]
console.log(quickSort(arr))

// Big O => worst case O(n^2)
// Average Case => O(nlogn) good for large data unsorted data