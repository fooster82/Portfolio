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


// // Type in the index.html main text
// const indexText = document.getElementById('index-text')
// const introText = "Hi! My name is Rob Bristow and I'm currently training as a full stack developer with Futureproof..."

// let time = 0;
// const arrayText = Array.from(introText);
// // Doesn't like the await on line 30.
// async function loadText() {
//     arrayText.forEach( a => {
//         await delay(time);
//         loadLetter(a);
//         time += 300;
//     })
// };

// delay = ms => {return new Promise(res => setTimeout(res, ms))} 

// loadText()

// function loadLetter(a) {
//     indexText.textContent += a;
// }


// Blinking cursor that shows on the main html page
const blinker = document.getElementById('blinker')

window.onload = () => setInterval(() => blinkingCursor(), 520);

function blinkingCursor() {
    if(!!blinker.textContent) { 
        blinker.innerText = '' 
    } else { 
        blinker.innerText = '|' 
    }
}
