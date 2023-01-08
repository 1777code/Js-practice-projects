/** @format */

const siteTitle = document.querySelector('title');
siteTitle.innerText = 'Weight Converter';

let pounds = document.querySelector('.pounds'),
  kilograms = document.querySelector('.kilograms'),
  grams = document.querySelector('.grams'),
  ounces = document.querySelector('.ounces'),
  form = document.querySelector('form');

const convertWeight = (evt) => {
  if (evt.target.classList.contains('pounds')) {
    let x = evt.target.value;
    kilograms.value = (x / 2.2046).toFixed(2);
    grams.value = (x / 0.0022046).toFixed(2);
    ounces.value = (x * 16).toFixed(2);
  }
  if (evt.target.classList.contains('kilograms')) {
    let x = evt.target.value;
    pounds.value = (x / 2.2046).toFixed(2);
    grams.value = (x * 1000).toFixed(2);
    ounces.value = (x * 35.274).toFixed(2);
  }
  if (evt.target.classList.contains('grams')) {
    let x = evt.target.value;
    kilograms.value = (x / 1000).toFixed(2);
    pounds.value = (x * 0.0022046).toFixed(2);
    ounces.value = (x * 0.035274).toFixed(2);
  }
  if (evt.target.classList.contains('ounces')) {
    let x = evt.target.value;

    kilograms.value = (x / 35.274).toFixed(2);
    grams.value = (x / 0.035274).toFixed(2);
    pounds.value = (x * 0.0625).toFixed(2);
  }
};

form.addEventListener('input', convertWeight);
