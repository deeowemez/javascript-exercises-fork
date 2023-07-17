const removeFromArray = function(array, ...args) {
    return array.filter((element) => (!args.includes(element)));
};

console.log(removeFromArray([1, 2, 3], "1", 3));

// Do not edit below this line
module.exports = removeFromArray;
