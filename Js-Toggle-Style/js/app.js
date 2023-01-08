/** @format */

const siteTitle = document.querySelector('title');
siteTitle.innerText = 'Toggle Styles';

const pageHeading = document.querySelector('#heading');

const pageBtn = document.querySelector('.page-btn');

pageBtn.addEventListener('click', () => {
  pageHeading.classList.toggle('page-text');
});
