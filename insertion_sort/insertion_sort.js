function insertionSort(arr) {
    for(let i = 1 ; i < arr.length; i++) {
        let number_to_insert = arr[i]
        let sorted_index = i-1
        while(sorted_index >= 0 && number_to_insert < arr[sorted_index]) {
            arr[sorted_index + 1] = arr[sorted_index]
            sorted_index = sorted_index - 1
        }
        arr[sorted_index + 1] = number_to_insert
    }
    return arr;
}

const arr=[8,20,-2,4,-6]
insertionSort(arr)
console.log(arr)