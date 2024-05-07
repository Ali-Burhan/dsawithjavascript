//we are going to practise merge sort 

function mergeSort(arr) {
    if(arr.length <= 1) return arr
    const mid = Math.floor(arr.length/2)

    let  leftArr = mergeSort(arr.slice(0,mid))
    let rightArr = mergeSort(arr.slice(mid)) 

    return merge(leftArr,rightArr)
}

function merge(leftarr,rightarr) {
    let sortedArr = []
   while(leftarr.length && rightarr.length){
    if(leftarr[0] < rightarr[0]){
        sortedArr.push(leftarr.shift())
    }else{
        sortedArr.push(rightarr.shift())
    }
}
       return [...sortedArr,...leftarr,...rightarr]
}

let test = [2,1,4,654,6,76,3,34,7,8,5]

console.log(mergeSort(test))