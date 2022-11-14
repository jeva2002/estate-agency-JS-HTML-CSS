import { footer } from '../components/footer.js';
import { header } from '../components/header.js';
import { showProperty } from '../components/property-detail.js';

document.getElementById('body').insertAdjacentElement('afterbegin', header());
document.getElementById('menu-icon').addEventListener('click', () => {
  document.querySelector('.links').classList.toggle('hidden');
});
document.getElementById('body').appendChild(await showProperty());
document.getElementById('body').insertAdjacentElement('beforeend', footer());

const addFavorite = document.querySelector('.favorite');
const id = parseInt(sessionStorage.getItem('id'));
let favorites = localStorage.getItem('favorites');
favorites =
  favorites === null ? [] : JSON.parse(localStorage.getItem('favorites'));

let flag = favorites.find((element) => element === id);

if (flag) {
  addFavorite.classList.toggle('myFavorites');
}

addFavorite.addEventListener('click', () => {
  if (flag) {
    addFavorite.classList.remove('myFavorites');
    const list = [];
    if (favorites.length === undefined) {
      list.push(parseInt(favorites));
    } else {
      for (let i = 0; i < favorites.length; i++) {
        if (favorites[i] !== id) {
          list.push(favorites[i]);
        }
      }
    }
    localStorage.setItem('favorites', JSON.stringify(list));
  } else {
    addFavorite.classList.add('myFavorites');
    const list = [id];
    if (favorites.length === undefined) {
      list.push(parseInt(favorites));
    } else {
      for (let i = 0; i < favorites.length; i++) {
        if (favorites[i] !== id) {
          list.push(favorites[i]);
        }
      }
    }
    localStorage.setItem('favorites', JSON.stringify(list));
  }
});
