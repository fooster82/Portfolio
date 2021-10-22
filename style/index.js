// Nav bar changing size
const navButton = document.getElementsByClassName('nav-button');

window.onscroll = () => changeNavSize();

function changeNavSize() {
    if(document.documentElement.scrollTop > 80) {
        for(i=0; i < navButton.length; i++) {
            navButton[i].style.height = '5px';
            navButton[i].style.fontSize = '20px';
        };
    } else {
        for(i=0; i < navButton.length; i++) {
            navButton[i].style.height = '73px';
            navButton[i].style.fontSize = '30px';
        };
    }
}


// Type in the index.html main text
const indexText = document.getElementById('index-text')
const introText = "Hi! My name is Rob Bristow and I'm currently training as a full stack developer with Futureproof..."


//ATTEMPT  1

// window.onload = () => {
//     for(i=0; i < introText.length; i++) {
//         setTimeout(loadLetter(introText[i]), 300 + 300*i)
//     }
//     // append the blinker span and set it running
// }


//ATTEMPT 2
const offset = 0;
const arrayText = Array.from(introText);
//offset doesn't like having 300 added to it (line 42)
arrayText.forEach( a => {
    setTimeout(loadLetter(a), 300 + offset);
    offset += 300;
});


function loadLetter(a) {
    indexText.textContent += a;
}


// Blinking cursor that shows on the main html page
const blinker = document.getElementById('blinker')

// window.onload = () => setInterval(() => blinkingCursor(), 520);

function blinkingCursor() {
    if(!!blinker.textContent) { 
        blinker.innerText = '' 
    } else { 
        blinker.innerText = '|' 
    }
}
