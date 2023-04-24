const startButton = document.querySelector('button[data-start]');
const stopButton = document.querySelector('button[data-stop]');

let colorID = null; 

startButton.addEventListener('click', () => {
    colorID = setInterval(() => {
        document.body.style.backgroundColor = `${getRandomHexColor()}`;
    }, 1000);

    startButton.disabled = true;
});

stopButton.addEventListener('click', () => {
    clearInterval(colorID);
    stopButton.disabled = false;
});


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
};
