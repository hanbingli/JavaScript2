'use strict';

const fruitBasket = ['Apple', 'Lemon', 'Grapefruit', 'Lemon', 'Banana', 'Watermelon', 'Lemon'];

function lemonOff(fruits){
   let fruitsWithoutLemon = fruits.filter(x => x !== 'Lemon')
   return `My mom bought me a fruit basket, containing ${fruitsWithoutLemon} !`
   

}
lemonOff(fruitBasket)
console.log(lemonOff(fruitBasket))