const reverseString = function(string) {
    let char = [];
    for (const ch of string){
        char.push(ch);
    }
    // char.reverse();
    char = char.reverse().toString();
    result = char.replace(/,/g,'');
    return result
};

reverseString("haydee");

// Do not edit below this line
module.exports = reverseString;
