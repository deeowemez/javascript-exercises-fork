const sumAll = function(numOne, numTwo) {
    if (+numOne < 0 || +numTwo < 0 || typeof numOne !== "number" || typeof numTwo !== "number") {
        return 'ERROR';
    }

    if (+numOne > +numTwo) {
        largerNum = +numOne;
        smallerNum = +numTwo;
    } else {
        largerNum = +numTwo;
        smallerNum = +numOne; 
    }

    let sum = 0;
    for (smallerNum; smallerNum <= largerNum; smallerNum++) {
        sum += smallerNum
    }
    return sum
};

console.log(sumAll(10, [90, 1]))

// Do not edit below this line
module.exports = sumAll;
