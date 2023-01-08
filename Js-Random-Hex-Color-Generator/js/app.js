/** @format */

const siteTitle = document.querySelector('title');
siteTitle.innerText = 'Random Hex Color Generator';

const hexBox = document.querySelector('.hex-box');

const generatorBtn = document.querySelector('.random-btn');

const generatorColor = () => {
  const randColor = Math.random().toString(16).substring(2, 8);
  document.body.style.backgroundColor = '#' + randColor;
  hexBox.innerText = randColor;
};
generatorColor();
generatorBtn.addEventListener('click', () => {
  generatorColor();
});
