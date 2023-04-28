const startButton = document.querySelector('button[data-start]');
const stopButton = document.querySelector('button[data-stop]');

let colorID = null; 

startButton.addEventListener('click', () => {

    startButton.disabled = true;
    stopButton.disabled = false;

    colorID = setInterval(() => {
        document.body.style.backgroundColor = `${getRandomHexColor()}`;
    }, 1000);
});

stopButton.addEventListener('click', () => {
    clearInterval(colorID);
    
    startButton.disabled = false;
    stopButton.disabled = true;
});


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
};
