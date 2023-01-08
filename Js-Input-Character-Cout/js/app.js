/** @format */

const siteTitle = document.querySelector('title');
siteTitle.innerText = 'Input Character Count';

const formInput = document.querySelector('.form-input');
let characterNumber = document.querySelector('.character-number');

formInput.addEventListener('keyup', () => {
  characterNumber.innerText = formInput.value.length;

  if (formInput.value.length > 10) {
    characterNumber.classList.add('number-count');
  } else {
    characterNumber.classList.remove('number-count');
  }
});
