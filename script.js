document.querySelector('.color-box').addEventListener('click', function(event) {
    let colorSplash = document.createElement('div');
    colorSplash.classList.add('color-splash');
    colorSplash.style.top = `${event.clientY}px`;
    colorSplash.style.left = `${event.clientX}px`;
    document.body.appendChild(colorSplash);
    
    setTimeout(() => {
        colorSplash.remove();
    }, 1000);
});

function playMusic() {
    document.getElementById("holiMusic").play();
}
