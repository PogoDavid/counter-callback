let intervalID;
let counter = 0;

let startCounter = function() {
    intervalID = setInterval(() => {
        ++counter;
        console.log(counter);
    }, 1000);
}

function stopCounter() {
    clearInterval(intervalID);
}

let startButton = document.getElementById('start-button');
let stopButton = document.getElementById('stop-button');

startButton.addEventListener('click', startCounter);
stopButton.addEventListener('click', stopCounter);