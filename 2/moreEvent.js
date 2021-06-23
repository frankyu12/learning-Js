const h1 = document.querySelector('.hello h1');

console.dir(h1);

function handleTitleclick() {
    h1.style.color = 'blue';
}

function handleMouseEnter() {
    h1.innerText = 'Mouse is here';
}

function handleMouseLeave(){
    h1.innerText = 'Mouse is gone';
}

function handleWindowResize() {
    document.body.style.backgroundColor = 'tomato';
}

function handleWindowCopy() {
    alert('copier')
}

function handleWindowOffline() {
    alert('SOS no WIFI');
}

function handlewindowonline() {
    alert('ALL GOOD');
}

h1.addEventListener("click" , handleTitleclick);
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener('mouseleave', handleMouseLeave);

window.addEventListener('resize' , handleWindowResize);
window.addEventListener('copy' , handleWindowCopy);

window.addEventListener('offline' , handleWindowOffline)
window.addEventListener('online' , handleWindowOnline)

//색이 다시 돌아오게끔
function handleTitleclick() {
    const currentColor = h1.style.color;
    let newColor;
    if(currentColor === "blue") {
        newColor = "tomato";
    } else {
        newColor = 'blue'
    }
    h1.style.color = newColor;
}

h1.addEventListener("click" , handleTitleclick);

