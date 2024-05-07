function quicksort(arr){
    if(arr.length <= 1) return arr
    let pivot = arr.length - 1
    let left = []
    let right = []
    for(let i = 0; i<arr.length - 1; i++){
        if(arr[i] < arr[pivot]){
            left.push(arr[i])
        }
        else{
            right.push(arr[i])
        }
    }
    return [...quicksort(left),arr[pivot],...quicksort(right)]
}

let test = [2,1,4,654,6,76,3,34,7,8,5]

console.log(quicksort(test))