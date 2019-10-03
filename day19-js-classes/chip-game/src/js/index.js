/* eslint-disable linebreak-style */
/* eslint-disable no-undef */

document.addEventListener('DOMContentLoaded', () => {
  const app = document.querySelector('#app');
  const chip = new Chip();
  chip.mount(app);

  const addNew = document.querySelector('#addNew');
  addNew.addEventListener('click', () => {
    const newCoin = document.querySelector('#app');
    const coin$ = new Chip();
    coin$.mount(newCoin);
  });
});
