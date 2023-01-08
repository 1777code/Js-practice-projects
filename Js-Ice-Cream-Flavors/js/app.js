/** @format */

const siteTitle = document.querySelector('title');
siteTitle.innerText = 'Ice Cream Flavors';

const toggleArrow = document.getElementsByClassName('arrow');

let i;
for (let i = 0; i < toggleArrow.length; i++) {
  toggleArrow[i].addEventListener('click', function () {
    this.parentElement.querySelector('.items').classList.toggle('show-items');
    this.classList.toggle('arrow-down');
  });
}
