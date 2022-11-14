import { footer } from '../components/footer.js';
import { header } from '../components/header.js';
import { createCard } from '../components/card.js';

document.getElementById('body').insertAdjacentElement('afterbegin', header());
document.getElementById('menu-icon').addEventListener('click', () => {
  document.querySelector('.links').classList.toggle('hidden');
});
document.getElementById('body').insertAdjacentElement('beforeend', footer());

const SERVER_URL = 'http://localhost:3000/properties/';

const request = async (_id) => await (await fetch(SERVER_URL + _id)).json();

const cardContainer = document.getElementById('cards-container');

let favorites = localStorage.getItem('favorites');
favorites =
  favorites === null ? [] : JSON.parse(localStorage.getItem('favorites'));

if (favorites) {
  for (let i = 0; i < favorites.length; i++) {
    const answer = await request(favorites[i]);
    const info = {
      id: answer.id,
      img: answer.img,
      location: answer.location,
      owner: answer.owner.name,
      type: answer.type,
      status: answer.status,
      price: answer.price,
      address: answer.address,
      size: answer.size,
      update: answer.update,
      bedroom: answer.bedroom,
      bathroom: answer.bathroom,
      garage: answer.garage,
    };
    cardContainer.appendChild(createCard(info, true));
  }
}
