function miniMaxSum(arr) {
    // Write your code here
    arr = arr.sort((a, b) => a-b);
    let max = 0, min = 0;
    for (let i = 0; i < arr.length -1; i++) {
        min += arr[i];
    }
    for (let j = 1; j < arr.length; j++) {
        max += arr[j];
    }
    console.log(min, max);
}
