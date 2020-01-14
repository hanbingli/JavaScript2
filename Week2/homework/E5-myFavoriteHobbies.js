'use strict';

const myHobbies = [
    'Meditation',
    'Reading',
    'Programming',
    'Hanging out with friends',
    'Going to the gym',
  ];

const list = document.createElement('ul');

myHobbies.forEach(function(myHobbies){
        const li =document.createElement('li'); 
        li.textContent = myHobbies;
        list.appendChild(li);
    });

document.querySelector('body').appendChild(list)
//!!!!!!!!!!!!!Must append whatever element to the body, or they'll not come into existence

