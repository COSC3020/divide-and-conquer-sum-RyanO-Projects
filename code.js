function divideAndConquerSum(a) {
    if(a.length == 0) return 0;   // empty, return 0.
    else if(a.length == 1) return a[0]; // single element, return single element.
    else if(a.length == 2) return a[0] + a[1]; // 2 elements, return sum of the two. 

    return split(a, 0, (a.length -1));
}

// 
function split(arr, low, high) {
    if((high - low + 1) <= 1) return arr[low];              // If there is only one element, return it.
    if((high - low + 1) == 2) return arr[low] + arr[high];  // If two elements, sum and return.
    var subLen = Math.floor((high - low + 1) / 3);          // Calculate 1/3 of the array.
    var lowMid = low + subLen;                              // Calculate end point of first third.
    var highMid = lowMid + subLen;                          // Calculate end point of second third.

    var leftSum = split(arr, low, lowMid-1);                  // Split first third
    var midSum = split(arr, lowMid, highMid-1);               // Split second third
    var rightSum = split(arr, highMid+1, high);               // Split last third
    return leftSum + midSum + rightSum;                     // Return sum of each third.
}
