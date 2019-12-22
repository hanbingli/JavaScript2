'use strict';

// Create an empty HTML file, called time.html
// Create a JavaScript file called showCurrentTime.js and include it in the HTML file
// Inside the JS file, write a function that adds the current time to the webpage. Make sure it's written in the HH:MM:SS notation (hour, minute, second). Hint: use setInterval() to make sure the time stays current
// Have the function execute when it's loading in the browser
let date = new Date();

function showCurrentTime(){

    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    let timeNow= hour + ':' + minute + ':' + second
    console.log(timeNow)

    document.querySelector('#timeNow').innerHTML = timeNow;
}



setInterval(showCurrentTime(),1000)





