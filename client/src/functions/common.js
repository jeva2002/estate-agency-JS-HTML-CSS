import { footer } from '../components/footer.js';
import { header } from '../components/header.js';

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
