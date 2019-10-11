/* eslint-disable linebreak-style */
/* eslint-disable no-undef */


document.addEventListener('DOMContentLoaded', () => {
  const selector = document.querySelector('#app');
  const snail = new Snail();
  snail.mount(selector);

  const snail1 = new Snail();
  snail1.mount(selector);
  const snail2 = new Snail();
  snail2.mount(selector);
});
