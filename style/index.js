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
