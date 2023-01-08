/** @format */

const siteTitle = document.querySelector('title');
siteTitle.innerText = 'Counter Project';

const buttonContainer = document.querySelector('.button-container');

const numberCount = document.querySelector('.number');

const changeNumberColor = () => {
  if (numberCount.innerText > 0) {
    numberCount.style.color = 'green';
  } else if (numberCount.innerText < 0) {
    numberCount.style.color = 'red';
  } else {
    numberCount.style.color = 'white';
  }
};

buttonContainer.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('subtract-btn')) {
    numberCount.innerText--;
    changeNumberColor();
  }
  if (evt.target.classList.contains('reset-btn')) {
    numberCount.innerText = 0;
    changeNumberColor();
  }
  if (evt.target.classList.contains('add-btn')) {
    numberCount.innerText++;
    changeNumberColor();
  }
});
