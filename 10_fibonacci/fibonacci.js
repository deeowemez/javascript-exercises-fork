const fibonacci = function(num) {
    let currentNum = 1; let array =[1,1,]; 
    let prevNum = 1; let nextNum = 0;
    if (num > 0 && typeof num === 'number') {
        for (let i = 0; i <= (num - 3); i++){
            nextNum = currentNum  + prevNum;
            array.push(nextNum);
            currentNum = nextNum;
            prevNum = currentNum - prevNum;
        }
        // console.log(array);
        return array[num - 1];
    } else return 'OOPS!';
    
};

console.log(fibonacci(4));

// Do not edit below this line
module.exports = fibonacci;
