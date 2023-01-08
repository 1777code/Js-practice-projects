/** @format */

const siteTitle = document.querySelector('title');
siteTitle.innerText = 'Vowel Counter';

const word = document.querySelector('.form-input');

const form = document.querySelector('.form');

const formBtn = document.querySelector('.submit-btn');

const resultMsg = document.querySelector('.result-msg');

const countVowel = (evt) => {
  evt.preventDefault();

  if (word.value === '') {
    resultMsg.innerText = 'Please enter a word';
  } else {
    let vowelCount = 0;
    let wordVowel = word.value.toLowerCase();

    for (let i = 0; i < wordVowel.length; i++) {
      let letter = wordVowel[i];
      if (letter.match(/([a,e,i,o,u])/)) {
        vowelCount++;
      }
    }
    resultMsg.innerText = `${word.value.toUpperCase()} has ${vowelCount} vowels in it`;
  }
};

formBtn.addEventListener('click', countVowel);
