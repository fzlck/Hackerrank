/* initial solution w/ time complexity O(n log n) */
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

/* better solution w/ time complexity O(n) */
function miniMaxSum(arr) {
    // Write your code here
    let min = arr[0];
    let max = arr[0];
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        min = arr[i] < min ? arr[i] : min;
        max = arr[i] > max ? arr[i] : max;
        total += arr[i];
    }
    console.log(total - max, total - min);
}
