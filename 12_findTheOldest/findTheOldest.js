const findTheOldest = function(people) {
    for (let i = 0; i < people.length; i++){
      if (people[i].yearOfDeath === undefined){
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        // console.log(currentYear);
        people[i].yearOfDeath = currentYear;
      }
    }
    let array = people.sort((a, b) => ((a.yearOfBirth - a.yearOfDeath) - (b.yearOfBirth - b.yearOfDeath)));
    return array[0];
  };

// Do not edit below this line
module.exports = findTheOldest;
