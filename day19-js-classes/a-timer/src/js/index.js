/* eslint-disable linebreak-style */
/* eslint-disable no-undef */

document.addEventListener('DOMContentLoaded', () => {
  const app = document.querySelector('#app');
  const bar = new Timer(50);
  bar.mount(app);

  const addNew = document.querySelector('#new');
  addNew.addEventListener('click', () => {
    const meh = document.querySelector('#app');
    const bar$ = new Timer(60);
    bar$.mount(meh);
    console.log(bar1);
  });
});
