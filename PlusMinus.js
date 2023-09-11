// initial solution
const plusMinus = (arr) => {
    // Write your code here
    let positive = 0, negative = 0, zero = 0;
    const ratioObj = (i) => {
        if (i > 0) ++positive;

        if (i < 0) ++negative;

        if (i === 0) ++zero;
    };
    arr.forEach((i) => {
        ratioObj(i)
    });
    const ratio = (n) => {
        const result = n / arr.length;
        console.log(parseFloat(result).toFixed(6));
    };
    ratio(positive);
    ratio(negative);
    ratio(zero);
}; 
