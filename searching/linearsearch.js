const testArr = [3,5,123,4,6,3,4,3,,32,2,7,989]

function linearSearch(arr,target) {
    for(let i = 0; i<= arr.length-1;i++){
        if(arr[i] == target){
            return i
        }
    }
    return false
}

console.log(linearSearch(testArr,989))