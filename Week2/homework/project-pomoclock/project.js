'use strict';

// If the timer is running, the user can't change the session length anymore.   
//????How to do it



let down = document.body.querySelector('#down');
let up = document.body.querySelector('#up')
let length = document.body.querySelector('#length').innerText;
let lengthNum = parseFloat(length);
console.log(lengthNum);
console.log(typeof lengthNum);


let minutes = document.body.querySelector('#minutes');
let seconds = document.body.querySelector('#seconds');


seconds.innerText = "00";
minutes.innerText = lengthNum;


let play = document.body.querySelector('#play');
let pause = document.body.querySelector('#pause');


down.addEventListener('click',function(){
    if(lengthNum === 0){
        lengthNum = 0;
       
    }else{
        lengthNum =lengthNum-1
    }
    
    document.body.querySelector('#length').innerText = lengthNum
    minutes.innerText = lengthNum;

    
})

up.addEventListener('click',function(){
    if(lengthNum === 480){
        lengthNum = 480;
       
    }else{
        lengthNum =lengthNum+1
    }
    document.body.querySelector('#length').innerText = lengthNum;
    minutes.innerText = lengthNum;

})

let countdown;
let flag = 0;

function timer(){
    if (flag == 0){
        let now = Date.now();
        let then = now + lengthNum * 60 * 1000;

        countdown = setInterval(function(){
        let secondsLeft = Math.round((then - Date.now())/1000);
        if (secondsLeft <= 0 ){
        
            alert ('Time\'s up!');
            clearInterval(countdown);
        }else{
            let m = Math.floor(secondsLeft / 60);
            let s = Math.floor(secondsLeft % 60);
            document.body.querySelector('#minutes').innerText = m;
            document.body.querySelector('#seconds').innerText = s;

        }
        }, 1000)
    }else{
        let currentM = document.body.querySelector('#minutes').innerText;
        let currentS = document.body.querySelector('#seconds').innerText;

        let resumeSec = parseFloat(currentM)*60 + parseFloat(currentS);
        let now = Date.now();
        let then = now + resumeSec * 1000;
        
        countdown = setInterval(function(){
            let secondsLeft = Math.round((then - Date.now())/1000);
            if (secondsLeft <= 0 ){
            
                alert ('Time\'s up!');
                clearInterval(countdown);
            }else{
                let m = Math.floor(secondsLeft / 60);
                let s = Math.floor(secondsLeft % 60);
                document.body.querySelector('#minutes').innerText = m;
                document.body.querySelector('#seconds').innerText = s;
    
            }
            }, 1000)
            flag =0;

    }
}


function pauseTimer(){
    clearInterval(countdown);
    flag = 1;
}


//play.onclick(timer(lengthNum));

///Why the addEventListener isn't running?????????

play.addEventListener('click',  timer);
pause.addEventListener('click',  pauseTimer);










// function countDown(){
//     if(sec === 0 && min === 0){
//         alert('Time\'s up!')
//     }
    
//     else if (sec === 0){
//         sec = 59;
//         min = min - 1;
//         minutes.innerText = min;
//         seconds.innerText = sec;
//     }
    
//     else if (sec < 10){ 
//         seconds.innerText = '0'+ sec;
//         minutes.innerText = min;
//         sec = sec - 1;
//     }
//     else{
//         sec = sec - 1;
//         minutes.innerText = min;
//         seconds.innerText = sec;
       
//     }
// }



// play.addEventListener('click', timer);
// stop.addEventListener('click', stopTimer);