/* eslint-disable linebreak-style */
const menu = () => {
  const dog = document.querySelector('#menu');
  dog.classList.toggle('flex');
  console.log(dog.classList);
};

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#menuIcon')
    .addEventListener('click', menu);
});
