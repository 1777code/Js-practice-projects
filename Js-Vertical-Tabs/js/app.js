/** @format */

const siteTitle = document.querySelector('title');
siteTitle.innerText = 'Vertical Tabs Animation';

const tabLinks = document.getElementsByClassName('tab-link');
const allContent = document.querySelectorAll('.tab-content');

for (let i = 0; i < tabLinks.length; i++) {
  tabLinks[i].addEventListener('click', function (evt) {
    const current = document.getElementsByClassName('active');
    current[0].className = current[0].className.replace('active', '');
    this.className += ' active';

    //Switch content
    const filter = evt.target.dataset.filter;

    allContent.forEach((content) => {
      if (content.classList.contains(filter)) {
        content.style.display = 'block';
      } else {
        content.style.display = 'none';
      }
    });
  });
}
