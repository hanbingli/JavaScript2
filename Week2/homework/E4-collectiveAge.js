'use strict';

const hackYourFutureMembers = [
    { name: 'Wouter', age: 33 },
    { name: 'Federico', age: 32 },
    { name: 'Noer', age: 27 },
    { name: 'Tjebbe', age: 22 },
  ];



function combinedAge(members){
    const ageArray = members.map(i => i.age);
    console.log(ageArray);
    const totalAge = ageArray.reduce((total, num) => total + num, 0);
    const phrase ='The collective age of the HYF team is: ' + totalAge

    return  phrase
}


combinedAge(hackYourFutureMembers)