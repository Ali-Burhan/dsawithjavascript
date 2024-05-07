const testArr = [3,5,123,4,6,3,4,3,32,2,7,989]

function insertionSort(arr) {
    for(let i = 0; i < arr.length - 1; i++) {
        let currentVal = arr[i]
        let j = i - 1;
        while (j >= 0 && arr[j] > currentVal) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = currentVal
    }
    return arr
}

console.log(insertionSort(testArr))