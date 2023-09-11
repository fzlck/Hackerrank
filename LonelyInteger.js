function lonelyinteger(a) {
    // Write your code here
    let lonely = 0;
    for (const i of a) {
        lonely ^= i;
    }
    return lonely;
}
