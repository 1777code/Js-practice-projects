/** @format */

const siteTitle = document.querySelector('title');
siteTitle.innerText = 'Click To Copy';

const formInput = document.querySelector('.form-input');
const copyBtn = document.querySelector('.copy-btn');

const copyText = (evt) => {
  evt.preventDefault();

  formInput.select();
  formInput.setSelectionRange(0, 999999);
  document.execCommand('copy');

  copyBtn.innerText = 'copied!!';

  setTimeout(() => {
    copyBtn.innerText = 'copy';
  }, 3000);
};

copyBtn.addEventListener('click', copyText);
