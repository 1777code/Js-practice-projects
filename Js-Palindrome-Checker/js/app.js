/** @format */

const siteTitle = document.querySelector('title');
siteTitle.innerText = 'Palindrome Checker';

const form = document.querySelector('.form');
const formBtn = document.querySelector('.submit-btn');

const resultMsg = document.querySelector('.result-msg');

const palindrome = (evt) => {
  evt.preventDefault();
  const word = document.querySelector('.form-input').value;

  if (word === '') {
    resultMsg.innerText = 'Please enter a word';
  } else {
    let wordLength = word.length;

    let wordStart = word.substring(0, Math.floor(wordLength / 2)).toLowerCase();

    let wordEnd = word
      .substring(wordLength - Math.floor(wordLength / 2))
      .toLowerCase();

    flipLetter = [...wordEnd].reverse().join('');

    if (wordStart === flipLetter) {
      resultMsg.innerText = `>> ${word.toUpperCase()} << is a palindrome`;
    } else {
      resultMsg.innerText = `>> ${word.toUpperCase()} << is not a palindrome`;
    }
  }
};

formBtn.addEventListener('click', palindrome);
