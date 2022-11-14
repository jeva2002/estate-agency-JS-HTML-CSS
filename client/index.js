import { footer } from './src/components/footer.js';
import { header } from './src/components/header.js';

document
  .getElementById('body')
  .insertAdjacentElement('afterbegin', header(true));
document
  .getElementById('body')
  .insertAdjacentElement('beforeend', footer(true));

const form = document.getElementById('form');

const submit = (e) => {
  e.preventDefault();
  const data = {
    type: e.target.type.value,
    status: e.target.status.value,
    word: e.target.word.value,
  };
  sessionStorage.setItem('search', JSON.stringify(data));
  window.location.href = `http://${window.location.host}/src/components/properties.html`;
};

form.addEventListener('submit', submit);
document.getElementById('properties').addEventListener('click', () => {
  sessionStorage.removeItem('search');
});

document.getElementById('menu-icon').addEventListener('click', () => {
  document.querySelector('.links').classList.toggle('hidden');
});
