/** @format */

const siteTitle = document.querySelector('title');
siteTitle.innerText = 'Restaurant Menu';

const menuItem = [
  {
    id: 1,
    menuTitle: 'Recipe Item 1',
    menuTopText:
      'One: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut, libero.',
    img: '../img/food-img-1.jpg',
    recipeTitle: 'Recipe 1',
    desc: 'desc:1 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem necessitatibus, reiciendis quo.',
  },
  {
    id: 2,
    menuTitle: 'RecipeItem 2',
    menuTopText:
      'Two: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut, libero.',
    img: '../img/food-img-2.jpg',
    recipeTitle: 'Recipe 2',
    desc: 'desc:2 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem necessitatibus, reiciendis quo.',
  },
  {
    id: 3,
    menuTitle: 'Recipe Item 3',
    menuTopText:
      'Three: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut, libero.',
    img: '../img/food-img-3.jpg',
    recipeTitle: 'Recipe 3',
    desc: 'desc:3 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem necessitatibus, reiciendis quo.',
  },
  {
    id: 4,
    menuTitle: 'Recipe Item 4',
    menuTopText:
      'Four: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut, libero.',
    img: '../img/food-img-4.jpg',
    recipeTitle: 'Recipe 4',
    desc: 'desc:4 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem necessitatibus, reiciendis quo.',
  },
  {
    id: 5,
    menuTitle: 'Recipe Item 5',
    menuTopText:
      'Five: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut, libero.',
    img: '../img/food-img-5.jpg',
    recipeTitle: 'Recipe 5',
    desc: 'desc:5 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem necessitatibus, reiciendis quo.',
  },
  {
    id: 6,
    menuTitle: 'Recipe Item 6',
    menuTopText:
      'Six: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut, libero.',
    img: '../img/food-img-6.jpg',
    recipeTitle: 'Recipe 6',
    desc: 'desc:6 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem necessitatibus, reiciendis quo.',
  },
];

const menuTitle = document.querySelector('#menu-title');
const menuImg = document.querySelector('#menu-img');
const menutopText = document.querySelector('#menu-top-text');
const menuRecipeTitle = document.querySelector('#recipe-title');
const menuDesc = document.querySelector('#desc');

const prevBtn = document.querySelector('#prev');
const randomBtn = document.querySelector('#random');
const nextBtn = document.querySelector('#next');

let currentMenu = 0;

const allMenu = () => {
  let menu = menuItem[currentMenu];
  menuTitle.textContent = menu.menuTitle;
  menuRecipeTitle.textContent = menu.item;
  menutopText.textContent = menu.menuTopText;
  menuImg.src = menu.img;
  menuRecipeTitle.textContent = menu.recipeTitle;
  menuDesc.textContent = menu.desc;
};

window.addEventListener('DOMContentLoaded', () => {
  allMenu(currentMenu);
});

randomBtn.addEventListener('click', () => {
  currentMenu = Math.floor(Math.random() * menuItem.length);
  allMenu(currentMenu);
});

prevBtn.addEventListener('click', () => {
  currentMenu--;
  if (currentMenu < 0) {
    currentMenu = menuItem.length - 1;
  }
  allMenu(currentMenu);
});

nextBtn.addEventListener('click', () => {
  currentMenu++;
  if (currentMenu > menuItem.length - 1) {
    currentMenu = 0;
  }
  allMenu(currentMenu);
});
