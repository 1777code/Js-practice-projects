/** @format */

const siteTitle = document.querySelector('title');
siteTitle.innerText = 'Modal Image';

const modalContainer = document.querySelector('#imgModal');
const modalImg = document.querySelector('#modal-img');
const modalTitle = document.querySelector('.modal-title');
const openModal = document.querySelector('#open-modal-img');
const closeModal = document.querySelector('#close-Modal-Btn');

openModal.addEventListener('click', () => {
  modalContainer.style.display = 'block';
  modalTitle.innerText = 'Welcome to our website';
  modalImg.src = 'imgs/inSide-img.jpg';
});
closeModal.addEventListener('click', () => {
  modalContainer.style.display = 'none';
});
