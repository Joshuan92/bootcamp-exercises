/* eslint-disable linebreak-style */
let number = 0;
const dice = () => {
  const randomDice = Math.floor(Math.random() * 6 + 1);
  switch (randomDice) {
    case 1:
      document.getElementById('dots1').className = 'dotMiddle';
      document.getElementById('dots2').className = '';
      document.getElementById('dots3').className = '';
      document.getElementById('dots4').className = '';
      document.getElementById('dots5').className = '';
      document.getElementById('dots6').className = '';

      break;
    case 2:
      document.getElementById('dots1').className = 'dotTopLeft';
      document.getElementById('dots2').className = 'dotBottomRight';
      document.getElementById('dots3').className = '';
      document.getElementById('dots4').className = '';
      document.getElementById('dots5').className = '';
      document.getElementById('dots6').className = '';
      break;
    case 3:
      document.getElementById('dots1').className = 'dotTopLeft';
      document.getElementById('dots2').className = 'dotBottomRight';
      document.getElementById('dots3').className = 'dotMiddle';
      document.getElementById('dots4').className = '';
      document.getElementById('dots5').className = '';
      document.getElementById('dots6').className = '';
      break;
    case 4:
      document.getElementById('dots1').className = 'dotTopLeft';
      document.getElementById('dots2').className = 'dotBottomRight';
      document.getElementById('dots3').className = 'dotTopRight';
      document.getElementById('dots4').className = 'dotBottomLeft';
      document.getElementById('dots5').className = '';
      document.getElementById('dots6').className = '';
      break;
    case 5:
      document.getElementById('dots1').className = 'dotTopLeft';
      document.getElementById('dots2').className = 'dotBottomRight';
      document.getElementById('dots3').className = 'dotTopRight';
      document.getElementById('dots4').className = 'dotBottomLeft';
      document.getElementById('dots5').className = 'dotMiddle';
      document.getElementById('dots6').className = '';
      break;
    case 6:
      document.getElementById('dots1').className = 'dotTopLeft';
      document.getElementById('dots2').className = 'dotBottomRight';
      document.getElementById('dots3').className = 'dotTopRight';
      document.getElementById('dots4').className = 'dotBottomLeft';
      document.getElementById('dots5').className = 'dotTopCenter';
      document.getElementById('dots6').className = 'dotBottomCenter';
      break;
    default:
      return false;
  }
  number = randomDice;
  return number;
};


const banan = () => {
  if (number < 6) {
    number += 1;
  } else {
    number = 1;
  }

  switch (number) {
    case 1:
      document.getElementById('dots1').className = 'dotMiddle';
      document.getElementById('dots2').className = '';
      document.getElementById('dots3').className = '';
      document.getElementById('dots4').className = '';
      document.getElementById('dots5').className = '';
      document.getElementById('dots6').className = '';

      break;
    case 2:
      document.getElementById('dots1').className = 'dotTopLeft';
      document.getElementById('dots2').className = 'dotBottomRight';
      document.getElementById('dots3').className = '';
      document.getElementById('dots4').className = '';
      document.getElementById('dots5').className = '';
      document.getElementById('dots6').className = '';
      break;
    case 3:
      document.getElementById('dots1').className = 'dotTopLeft';
      document.getElementById('dots2').className = 'dotBottomRight';
      document.getElementById('dots3').className = 'dotMiddle';
      document.getElementById('dots4').className = '';
      document.getElementById('dots5').className = '';
      document.getElementById('dots6').className = '';
      break;
    case 4:
      document.getElementById('dots1').className = 'dotTopLeft';
      document.getElementById('dots2').className = 'dotBottomRight';
      document.getElementById('dots3').className = 'dotTopRight';
      document.getElementById('dots4').className = 'dotBottomLeft';
      document.getElementById('dots5').className = '';
      document.getElementById('dots6').className = '';
      break;
    case 5:
      document.getElementById('dots1').className = 'dotTopLeft';
      document.getElementById('dots2').className = 'dotBottomRight';
      document.getElementById('dots3').className = 'dotTopRight';
      document.getElementById('dots4').className = 'dotBottomLeft';
      document.getElementById('dots5').className = 'dotMiddle';
      document.getElementById('dots6').className = '';
      break;
    case 6:
      document.getElementById('dots1').className = 'dotTopLeft';
      document.getElementById('dots2').className = 'dotBottomRight';
      document.getElementById('dots3').className = 'dotTopRight';
      document.getElementById('dots4').className = 'dotBottomLeft';
      document.getElementById('dots5').className = 'dotTopCenter';
      document.getElementById('dots6').className = 'dotBottomCenter';
      break;
    default:
      return false;
  }
  return true;
};

dice();

document.addEventListener('DOMContentLoaded', () => {
  const btnDice = document.querySelector('#btn-random');
  btnDice.addEventListener('click', dice);
});

document.addEventListener('DOMContentLoaded', () => {
  const btnDice = document.querySelector('#btn-addOne');
  btnDice.addEventListener('click', banan);
});
