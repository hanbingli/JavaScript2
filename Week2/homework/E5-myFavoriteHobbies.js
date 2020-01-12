'use strict';

const myHobbies = [
    'Meditation',
    'Reading',
    'Programming',
    'Hanging out with friends',
    'Going to the gym',
  ];

let list = document.createElement('ul');

myHobbies.forEach(function(myHobbies){
        let li =document.createElement('li'); 
        li.textContent = myHobbies;
        list.appendChild(li);
    });
console.log(list)

document.querySelector('body').appendChild(list)
//!!!!!!!!!!!!!Must append whatever element to the body, or they'll not come into existence

