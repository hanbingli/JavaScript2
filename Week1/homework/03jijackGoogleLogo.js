'use strict';

// Inside a JavaScript file, called hijackGoogleLogo.js, create a function called hijackGoogleLogo
// Find out how to select the element that contains the Google logo, and store it in a variable
// Modify the source and sourceset of the logo so that it's replaced by the HackYourFuture logo instead

function hijackGoogleLogo(){
    let gLogo = document.querySelector('#hplogo')
    gLogo.src = 'https://www.hackyourfuture.dk/static/logo-dark.svg.'

    return gLogo
}

hijackGoogleLogo()