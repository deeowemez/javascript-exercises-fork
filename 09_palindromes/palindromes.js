const palindromes = function (str) {
    // remove space, case insensitive, remove non-alpha characters 
    let array = []; let length;
    let repArray = str.replace(' ', '').toLowerCase();
    for (let ch of repArray){
        if (/^[a-zA-Z0-9]+$/.test(ch)) array.push(ch);
    }
    // split array into two
    let arrayOne = array.slice(0, Math.floor(array.length/2)).toString();
    let arrayTwo = array.slice(Math.ceil(array.length/2)).reverse().toString();
    // console.log(arrayOne);
    // console.log(arrayTwo);
    // compare
    if (arrayOne === arrayTwo){
        return true;
    } else return false;
};

// Do not edit below this line
module.exports = palindromes;
