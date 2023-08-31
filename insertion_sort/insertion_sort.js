function insertionSort(arr) {
  for(let i = 1; i < arr.length; i++) {
    let unsortedEl = arr[i]
    let sortedIndex = i - 1 
    while(sortedIndex >= 0 && unsortedEl < arr[sortedIndex]) {
        arr[sortedIndex + 1] = arr[sortedIndex]
        sortedIndex = sortedIndex - 1 
    }
    arr[sortedIndex + 1] = unsortedEl
}
  return arr
}
// Big O notation O(n^2)

const arr=[8,20,-2,4,-6]
insertionSort(arr)
console.log(arr)