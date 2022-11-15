import { createCard } from '../components/card.js';
import { insertCommon } from './common.js';

insertCommon();

const SERVER_URL = 'http://localhost:3000/properties/';

const request = async (_word, _option) =>
  await (await fetch(SERVER_URL + `?q=${_word + _option}`)).json();

const compareRequest = async (_data, _option) => {
  try {
    if (_data) {
      if (_data.type && _data.status) {
        return await request(
          _data.word,
          `&type=${_data.type}&status=${_data.status}`
        );
      } else if (_data.type)
        return await request(_data.word, `&type=${_data.type}`);
      else if (_data.status)
        return await request(_data.word, `&status=${_data.status}`);
      else return await request(_data.word, '');
    } else return await request('', _option);
  } catch (err) {
    console.error(err);
  }
};

const isFavorite = (_id) => {
  let favorites = localStorage.getItem('favorites');
  favorites =
    favorites === null ? [] : JSON.parse(localStorage.getItem('favorites'));

  return favorites.find((e) => e === _id) === _id ? true : false;
};

const cardContainer = document.getElementById('cards-container');

const showCards = async (_data, _option) => {
  const answer = await compareRequest(_data, _option);
  for (let element in answer) {
    const info = {
      id: answer[element].id,
      img: answer[element].img,
      location: answer[element].location,
      owner: answer[element].owner.name,
      type: answer[element].type,
      status: answer[element].status,
      price: answer[element].price,
      address: answer[element].address,
      size: answer[element].size,
      update: answer[element].update,
      bedroom: answer[element].bedroom,
      bathroom: answer[element].bathroom,
      garage: answer[element].garage,
    };
    cardContainer.appendChild(createCard(info, isFavorite(info.id)));
  }
};

let data =
  sessionStorage.getItem('search') !== null
    ? JSON.parse(sessionStorage.getItem('search'))
    : null;

if (data !== null) {
  showCards(data);
} else {
  showCards('', '&_limit=6');
}

const form = document.getElementById('search');
const filterData = async (e) => {
  e.preventDefault();
  sessionStorage.removeItem('search');
  let data = {
    type: e.target.type.value,
    status: e.target.status.value,
    word: e.target.word.value,
  };
  data =
    data.type === '' && data.status === '' && data.word === '' ? null : data;
  cardContainer.innerHTML = '';
  showCards(data || '', '&_limit=6');
};
form.addEventListener('submit', filterData);

document.getElementById('all').addEventListener('click', () => {
  cardContainer.innerHTML = '';
  showCards('', '');
});
