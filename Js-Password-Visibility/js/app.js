/** @format */

const siteTitle = document.querySelector('title');
siteTitle.innerText = 'Password Visibility';

const passwordInput = document.querySelector('#password');
const passwordIcon = document.querySelector('.password-icon');

passwordIcon.addEventListener('click', () => {
  if (passwordIcon.classList.contains('fa-eye')) {
    passwordInput.setAttribute('type', 'text');
    passwordIcon.classList.replace('fa-eye', 'fa-eye-slash');
  } else {
    passwordInput.setAttribute('type', 'password');
    passwordIcon.classList.replace('fa-eye-slash', 'fa-eye');
  }
});
