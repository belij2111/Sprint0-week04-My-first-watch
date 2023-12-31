let timerId = null;

const startButton = document.getElementById("start");
startButton.addEventListener('click', function () {
    if (timerId === null) {
        timerId = setInterval(updateClock, 1000);
    }
});

const stopButton = document.getElementById("stop");
stopButton.addEventListener('click', function () {
    clearInterval(timerId);
    timerId = null;
});

function updateClock() {
    const clock = document.getElementById('clock');
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    clock.textContent = hours + ':' + minutes + ':' + seconds;
}