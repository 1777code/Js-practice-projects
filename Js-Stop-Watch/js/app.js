/** @format */

const siteTitle = document.querySelector('title');
siteTitle.innerText = 'Stop Watch';

const seconds = document.querySelector('#seconds');
const milliSeconds = document.querySelector('#milli-seconds');
const startBtn = document.querySelector('#start');
const stopBtn = document.querySelector('#stop');
const resetBtn = document.querySelector('#reset');

let sec = 0;
let milliSec = 0;
let timeInterval;

const timer = () => {
  milliSec++;
  if (milliSec < 9) {
    milliSeconds.innerText = '0' + milliSec;
  }
  if (milliSec > 9) {
    milliSeconds.innerText = milliSec;
  }
  if (milliSec > 99) {
    sec++;
    seconds.innerText = '0' + sec;
    milliSec = 0;
    milliSeconds.innerText = '0' + 0;
  }

  if (sec > 9) {
    seconds.innerText = sec;
  }
};

startBtn.addEventListener('click', () => {
  timeInterval = setInterval(timer, 10);
});
stopBtn.addEventListener('click', () => {
  clearInterval(timeInterval);
});
resetBtn.addEventListener('click', () => {
  clearInterval(timeInterval);
  sec = '00';
  milliSec = '00';
  seconds.innerText = sec;
  milliSeconds.innerText = milliSec;
});
