/** @format */

const siteTitle = document.querySelector('title');
siteTitle.innerText = 'Active NavBar';

const navUL = document.getElementById('list');

const navBtn = navUL.getElementsByClassName('list-item');

for (i = 0; i < navBtn.length; i++) {
  navBtn[i].addEventListener('click', function () {
    const current = document.getElementsByClassName('active');
    current[0].className = current[0].className.replace('active', '');
    this.className += ' active';
  });
}
