/** @format */

const siteTitle = document.querySelector('title');
siteTitle.innerText = 'Js Modal';

const openModalBtn = document.querySelector('.onModal-btn');
const showModal = document.querySelector('#open-modal');
const cancelModal = document.querySelector('.cancel-btn');
const closeModalYesBtn = document.querySelector('.yes-btn');
const closeModalIcon = document.querySelector('.close-btn-icon-div');

openModalBtn.addEventListener('click', () => {
  showModal.style.display = 'flex';
});

cancelModal.addEventListener('click', () => {
  showModal.style.display = 'none';
});
closeModalYesBtn.addEventListener('click', () => {
  showModal.style.display = 'none';
});
closeModalIcon.addEventListener('click', () => {
  showModal.style.display = 'none';
});
