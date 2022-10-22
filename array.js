const a = []
//b1
function findFirstElement(arr) {
    return arr[0];
}
//b2
function findLastElement(arr) {
    return(arr[arr.length - 1]);
}
//b3
function finfSecongToLastElement(arr) {
    return(arr[arr.length - 2]);
}
//b4
function findElementByIndex(arr, index) {
    return(arr[index])
}
//b5
function creatArrayWithOne(num) {
    const arr = [];
    for(let i = 1; i <= num; i++) {
        arr.push(1);
    }
    return arr;
} 
// console.log(creatArrayWithOne(5));
//b6
function zeroToN(num) {
    const arr = [];
    if(num < 0) {
        return undefined;
    }
    else {
        for(let i = 0; i <= num; i++ ) {
            arr.push(i)
        }
        return arr;
    }
}
console.log(zeroToN(1))
//b7
function creatArrayByIndexes(arr, indexStart, indexEnd) {
    const result = [];
    if(arr.length === 0) {
        return []
    }
    else if(indexStart > indexEnd || indexStart < 0 || indexEnd < 0 || indexEnd > arr.length) {
        return undefined
    }
    else {
        for(let i = indexStart; i <= indexEnd; i ++) {
            result.push(arr[i]);
        }
        return result
    }
}
console.log(creatArrayByIndexes([1,3,4,5,6,7],1,4))
//b8
function findMatchString(arr, element) {
    for(let i = 0; i < arr.length; i++) {
        if(element === arr[i]) {
            return true
            // break
        }
    }
    return false
}
console.log(findMatchString([1,3,4,5,6],1))