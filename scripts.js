// Timer functionality
let timerInterval;
let timerRunning = false;
let timerSeconds = 0;
let timerMinutes = 0;

function startTimer() {
  if (!timerRunning) {
    timerInterval = setInterval(updateTimer, 1000);
    timerRunning = true;
  }
}

function stopTimer() {
  clearInterval(timerInterval);
  timerRunning = false;
}

function resetTimer() {
  stopTimer();
  timerSeconds = 0;
  timerMinutes = 0;
  document.querySelector('.timer .seconds').innerHTML = '00';
  document.querySelector('.timer .minutes').innerHTML = '00';
}

function updateTimer() {
  timerSeconds++;
  if (timerSeconds == 60) {
    timerMinutes++;
    timerSeconds = 0;
  }
  document.querySelector('.timer .seconds').innerHTML = timerSeconds < 10 ? '0' + timerSeconds : timerSeconds;
  document.querySelector('.timer .minutes').innerHTML = timerMinutes < 10 ? '0' + timerMinutes : timerMinutes;
}

document.querySelector('.start-timer').addEventListener('click', startTimer);
document.querySelector('.stop-timer').addEventListener('click', stopTimer);
document.querySelector('.reset-timer').addEventListener('click', resetTimer);

// Stopwatch functionality
// Stopwatch functionality
let stopwatchInterval;
let stopwatchRunning = false;
let stopwatchMilliseconds = 0;
let stopwatchSeconds = 0;
let stopwatchMinutes = 0;

function startStopwatch() {
  if (!stopwatchRunning) {
    stopwatchInterval = setInterval(updateStopwatch, 10);
    stopwatchRunning = true;
  }
}

function stopStopwatch() {
  clearInterval(stopwatchInterval);
  stopwatchRunning = false;
}

function resetStopwatch() {
  stopStopwatch();
  stopwatchMilliseconds = 0;
  stopwatchSeconds = 0;
  stopwatchMinutes = 0;
  document.querySelector('.stopwatch .milliseconds').innerHTML = '00';
  document.querySelector('.stopwatch .seconds').innerHTML = '00';
  document.querySelector('.stopwatch .minutes').innerHTML = '00';
}

function updateStopwatch() {
  stopwatchMilliseconds++;
  if (stopwatchMilliseconds == 100) {
    stopwatchSeconds++;
    stopwatchMilliseconds = 0;
  }
  if (stopwatchSeconds == 60) {
    stopwatchMinutes++;
    stopwatchSeconds = 0;
  }
  document.querySelector('.stopwatch .milliseconds').innerHTML = stopwatchMilliseconds < 10 ? '0' + stopwatchMilliseconds : stopwatchMilliseconds;
  document.querySelector('.stopwatch .seconds').innerHTML = stopwatchSeconds < 10 ? '0' + stopwatchSeconds : stopwatchSeconds;
  document.querySelector('.stopwatch .minutes').innerHTML = stopwatchMinutes < 10 ? '0' + stopwatchMinutes : stopwatchMinutes;
}

document.querySelector('.start-stopwatch').addEventListener('click', startStopwatch);
document.querySelector('.stop-stopwatch').addEventListener('click', stopStopwatch);
document.querySelector('.reset-stopwatch').addEventListener('click', resetStopwatch);
