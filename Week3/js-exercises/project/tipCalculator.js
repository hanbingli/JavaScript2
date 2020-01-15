'use strict';

// ?????????????How to change the style of the form? 
// When I adjust the style of select, it only changes the color of one line, instead of the whole dropdown form.





const button = document.body.querySelector('#calculate');
const each = document.body.querySelector('#each');


function calculator(bill, tip, num){
    const price = document.body.querySelector('#price')
    const priceNum = parseFloat(price.value);
    console.log (priceNum);


    const rate = document.body.querySelector('#form');
    const rateS = parseFloat(rate.value);
    console.log(rateS)

    const people = document.body.querySelector('#people');
    const peopleNum = parseFloat(people.value);
    console.log(peopleNum)

    

    let amount = document.body.querySelector('#amount');



    if(!!priceNum === false){ 
        alert('Please enter a valid number for the bill.')
        
    }else if(!!peopleNum === false){ 
        alert('Please enter a valid number of people.')
        
    }else if(peopleNum === 1){
        let bill = priceNum * rateS;
        amount.innerText = bill;
        each.style.display = 'none';

    }else{
        let bill = priceNum * rateS / peopleNum;
        amount.innerText = bill.toFixed(2);
    }

}

button.addEventListener('click', calculator)