import { footer } from '../components/footer.js';
import { header } from '../components/nav.js';

export const insertCommon = (_isIndex) => {
  document
    .getElementById('body')
    .insertAdjacentElement('afterbegin', header(_isIndex));
  document.getElementById('menu-icon').addEventListener('click', () => {
    document.querySelector('.links').classList.toggle('hidden');
  });
  document
    .getElementById('body')
    .insertAdjacentElement('beforeend', footer(_isIndex));
};

export const SERVER_URL = 'http://localhost:3000/properties/';
