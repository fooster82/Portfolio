// Nav bar changing size
const navBar = document.querySelector('nav')
const navButton = document.getElementsByClassName('nav-button')

window.onscroll = () => changeNavSize();

function changeNavSize() {
    if(document.documentElement.scrollTop > 80) {
        navBar.style.height = '10px';
        // navButton.style.height = '';
        navBar.style.transition = 'height 0.2s'
    } else {
        navBar.style.height = '100px';
        // navButton.style.height = '';
        navBar.style.transition = 'height 0.2s';
    }
}

// Blinking cursor that shows on the main html page
const blinker = document.getElementById('blinker')

window.onload = () => setInterval(blinkingCursor, 520)

function blinkingCursor() {
    if(!!blinker.textContent) { 
        blinker.innerText = '' 
    } else { 
        blinker.innerText = '|' 
    }
}
