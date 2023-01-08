/** @format */

const siteTitle = document.querySelector('title');
siteTitle.innerText = 'Pop Up Modal';

const modal = document.querySelector('.modal-div');
const openModalBtn = document.querySelector('.open-modal-btn');
const closeModalBtn = document.querySelector('.close-modal-btn');

const openModal = (evt) => {
  evt.preventDefault();
  modal.style.display = 'block';
};
const closeModal = () => {
  modal.style.display = 'none';
};

openModalBtn.addEventListener('click', openModal);
modal.addEventListener('click', closeModal);
closeModalBtn.addEventListener('click', closeModal);
