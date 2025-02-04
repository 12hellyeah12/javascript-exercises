//npm test findTheOldest.spec.js

const people = [
    {
      name: "Carly",
      yearOfBirth: 1066,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]

const findTheOldest = function(array) {
    const oldestPerson = 
    array.map(person => {
        if(!person.yearOfDeath){
            person.yearOfDeath = new Date().getFullYear();
        }
        return person.yearOfDeath - person.yearOfBirth;
    })
        .toSorted((ageA, ageB) => ageB - ageA);
    
    return people.filter(person => {
        if(person.yearOfDeath - person.yearOfBirth === oldestPerson[0]){
            return person.name;
        }
        return;
    })
};

console.log(findTheOldest(people));

// Do not edit below this line
module.exports = findTheOldest;
