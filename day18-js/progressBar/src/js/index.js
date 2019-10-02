/* eslint-disable linebreak-style */

let i = 0;
let maxValue = 20;

const updateRange = () => {
  const progress = document.querySelector('#progress');
  progress.textContent = `${i}/${maxValue}`;
};


const updateProgress = () => {
  updateRange();
  const progressBar = document.querySelector('#orange');
  progressBar.style.width = `${i * 100 / maxValue}%`;
};


document.addEventListener('DOMContentLoaded', () => {
  updateRange();

  const submit = document.querySelector('#submit');
  submit.addEventListener('click', () => {
    const range = document.querySelector('#range').value;
    console.log(range);
    maxValue = range;
    console.log(maxValue);
    updateRange();
  });


  const btnPlus = document.querySelector('#plus');
  btnPlus.addEventListener('click', () => {
    if (i < maxValue) {
      i += 1;
    }
    updateProgress();
  });

  const btnMinus = document.querySelector('#minus');
  btnMinus.addEventListener('click', () => {
    if (i > 0) {
      i -= 1;
    }
    updateProgress();
  });
});
