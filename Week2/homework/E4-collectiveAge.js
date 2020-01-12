'use strict';

const hackYourFutureMembers = [
    { name: 'Wouter', age: 33 },
    { name: 'Federico', age: 32 },
    { name: 'Noer', age: 27 },
    { name: 'Tjebbe', age: 22 },
  ];



function combinedAge(members){
    let ageArray = members.map(i => i.age);
    console.log(ageArray);
    let totalAge = ageArray.reduce((total, num) => total + num, 0);
    let phrase ='The collective age of the HYF team is: ' + totalAge
    console.log(phrase);
    return  phrase
}


combinedAge(hackYourFutureMembers)