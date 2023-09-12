function diagonalDifference(arr) {
    // Write your code here
    let leftSum = 0, rightSum = 0;
    let n = arr.length;
    for (let i = 0; i < n; i++) {
      leftSum += arr[i][i];
      rightSum += arr[i][n-1-i];
    }
    return Math.abs(leftSum - rightSum);
}
