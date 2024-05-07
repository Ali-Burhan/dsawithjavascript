const testArr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

function binarySearch(arr,target) {
    let left = 1
    let right = arr.length - 1
    let mid = Math.floor((left+right)/2)

    while(left <= right) {
        if (arr[mid] === target){
            return mid
        }
        else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
        mid = Math.floor((right + left)/2);
    }
    return false
}


console.log(binarySearch(testArr,13))