const repeatString = function(string, num) {
    let result = '';
    if (num < 0){
        return "ERROR";
    }
    if (string === ''){
        return '';
    }
    for (let i = 0; i < num; i++){
        result += string;
    }
    return result
};

repeatString("", 10)

// Do not edit below this line
module.exports = repeatString;
