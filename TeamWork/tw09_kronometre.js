let timer;
let isRunning = false;
let hours = 0;
let minutes = 0;
let seconds = 0;

function startStop() {
  if (isRunning) {
    clearInterval(timer);
    isRunning = false;
  } else {
    timer = setInterval(incrementTimer, 1000);
    isRunning = true;
  }
}

function reset() {
  clearInterval(timer);
  isRunning = false;
  hours = 0;
  minutes = 0;
  seconds = 0;
  updateDisplay();
}

function incrementTimer() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes === 60) {
    minutes = 0;
    hours++;
  }
  updateDisplay();
}

function updateDisplay() {
  const formattedTime = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  document.getElementById("display").textContent = formattedTime;
}

function pad(num) {
  return num < 10 ? "0" + num : num;
}