function divideAndConquerSum(a) {
    if(a.length == 0) return 0;   // empty, return 0.
    else if(a.length == 1) return a[0]; // single element, return single element.
    else if(a.length == 2) return a[0] + a[1]; // 2 elements, return sum of the two. 

    var sum = split(a, 0, (a.length -1))
    return sum;
}

// first third of array is 0 to subLen
// second third of array is subLen to 2*subLen
// third third of array is 2*subLen to len
// each third should return the sum of the "subarrays" which at its lowest should each return only one value which can be summed with the others.
// pass to split (array, low = 0, high = length-1)
function split(arr, low, high) {
    if(len == 1) return arr[low];
    if((high - low) == 1) return arr[low] + arr[high];
    var lowMid = Math.floor(((low+high)/2)/2);
    var midMid = Math.floor((low+high)/2);
    var highMid = Math.floor((midMid + high)/2);

    var leftSum = split(arr, low, lowMid);
    var midSum = split(arr, lowMid, highMid);
    var rightSum = split(arr, highMid, high);
    return leftSum + midSum + rightSum;
}
// I really don't think this is going to work.
