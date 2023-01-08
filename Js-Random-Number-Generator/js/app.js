/** @format */

const siteTitle = document.querySelector('title');
siteTitle.innerText = 'Random Number Generator';

const randomBox1 = document.querySelector('.randombox-1');

const randomBox2 = document.querySelector('.randombox-2');

const generatorBtn = document.querySelector('.random-btn');

const randomNumber = () => {
  const randomNum1 = Math.floor(Math.random() * 20);
  const randomNum2 = Math.floor(Math.random() * 20);

  randomBox1.innerText = randomNum1;
  randomBox2.innerText = randomNum2;
};

randomNumber();

generatorBtn.addEventListener('click', () => {
  randomNumber();
});
