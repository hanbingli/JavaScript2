'use strict';

// If the timer is running, the user can't change the session length anymore.   
//????How to do it



const down = document.body.querySelector('#down');
const up = document.body.querySelector('#up')
const session = document.body.querySelector('.session')
const length = document.body.querySelector('#length').innerText;
let lengthNum = parseFloat(length);


const minutes = document.body.querySelector('#minutes');
const seconds = document.body.querySelector('#seconds');


seconds.innerText = "00";
minutes.innerText = lengthNum;


const play = document.body.querySelector('#play');
const pause = document.body.querySelector('#pause');


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
    up.style.display = 'none';
    down.style.display = 'none';
    session.style.justifyContent = 'center';
  
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
    up.style.display = 'block';
    down.style.display = 'block';
    clearInterval(countdown);
    flag = 1;
}



play.addEventListener('click',  timer);
pause.addEventListener('click',  pauseTimer);


