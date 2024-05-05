let timer;
let time = 60;
let isRunning = false;

const start = document.querySelector('.start');
const pause = document.querySelector('.pause');
const stop = document.querySelector('.stop');
const timerDisplay = document.querySelector('.timer');

start.addEventListener('click', startTimer);
pause.addEventListener('click', pauseTimer);
stop.addEventListener('click', stopTimer);

function startTimer(){
    if(!isRunning){
        timer = setInterval(updateTimer,1000)
    }
}

function pauseTimer() {
    clearInterval(timer);
    isRunning = false;
}

function stopTimer() {
    clearInterval(timer);
    isRunning = false;
    time = 60;
    updateTimerDisplay();
}

function updateTimer() {
    time--;
    if (time < 0) {
        clearInterval(timer);
        isRunning = false;
        time = 0;
    }
    updateTimerDisplay();
}

function updateTimerDisplay() {
    timerDisplay.textContent = `${time} sec`;
}