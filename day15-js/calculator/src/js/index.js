/* eslint-disable linebreak-style */
let result = 0;
let number = 0;
let op = 0;

const userInput = () => {
  const textNumber = document.querySelector('#calc__input');
  number = parseInt(textNumber.value, 10);
};

const showHistory = () => {
  const resultNumber = document.getElementById('calc__result').innerHTML;
  const history = document.querySelector('#calc__history');
  let text = `${resultNumber.toString() + op + number.toString()}=${result.toString()}`;
  history.textContent = text;
  text = '';
};

const showResult = () => {
  showHistory();
  const textResult = document.querySelector('#calc__result');
  textResult.textContent = result;
  document.querySelector('#calc__input').value = 0;
};


const handlePlusClick = () => {
  userInput();
  if (op !== 0) {
    result += number;
    showResult();
  } else {
    op = '+';
    result += number;
  }
};

const plus = () => {
  const btnPlus = document.querySelector('#btn-plus');
  btnPlus.addEventListener('click', handlePlusClick);
};


const handleMinusClick = () => {
  userInput();
  result -= number;
  op = '-';
};

const minus = () => {
  const btnMinus = document.querySelector('#btn-minus');
  btnMinus.addEventListener('click', handleMinusClick);
};

const handleMultiClick = () => {
  userInput();
  result *= number;
  op = '*';
};

const times = () => {
  const btnTimes = document.querySelector('#btn-times');
  btnTimes.addEventListener('click', handleMultiClick);
};

const handleDivideClick = () => {
  userInput();
  result /= number;
  op = '/';
};

const divide = () => {
  const btnDivide = document.querySelector('#btn-divide');
  btnDivide.addEventListener('click', handleDivideClick);
};

const handleClear = () => {
  result = 0;
  op = 0;
  document.querySelector('#calc__input').value = 0;
  showResult();
  const history = document.querySelector('#calc__history');
  history.textContent = '0';
};

const clear = () => {
  const btnClear = document.querySelector('#btn-clear');
  btnClear.addEventListener('click', handleClear);
};

const equals = () => {
  switch (op) {
    case '+':
      plus();
      showResult();
      break;
    case '-':
      minus();
      showResult();
      break;
    case '*':
      times();
      showResult();
      break;
    case '/':
      divide();
      showResult();
      break;
    default:
      return false;
  }
};

document.addEventListener('DOMContentLoaded', () => {
  plus();
  minus();
  times();
  divide();
  clear();
  const btnEquals = document.querySelector('#btn-equals');
  btnEquals.addEventListener('click', equals);
});
