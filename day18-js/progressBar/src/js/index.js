/* eslint-disable linebreak-style */
/* eslint-disable no-undef */

document.addEventListener('DOMContentLoaded', () => {
  const app = document.querySelector('#app');
  const bar = new ProgressBar(50, 100);
  bar.mount(app);

  const bar2 = new ProgressBar(70, 150);
  bar2.mount(app);
});
