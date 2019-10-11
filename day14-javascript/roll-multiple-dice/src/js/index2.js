/* eslint-disable linebreak-style */
const roll = () => Math.floor(Math.random() * 6 + 1);

const updateFace = (dice, faceValue) => {
  dice.src = `img/side${faceValue}.png`;
};

const rollAll = () => {
  updateFace(document.querySelector('#dice1'), roll());
  updateFace(document.querySelector('#dice2'), roll());
  updateFace(document.querySelector('#dice3'), roll());
  updateFace(document.querySelector('#dice4'), roll());
  updateFace(document.querySelector('#dice5'), roll());
  updateFace(document.querySelector('#dice6'), roll());
};

const handleDiceClick = (event) => {
  updateFace(event.target, roll());
};

document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('keypress', rollAll);

  document.querySelector('#dice1').addEventListener('click', handleDiceClick);

  document.querySelector('#dice2').addEventListener('click', handleDiceClick);

  document.querySelector('#dice3').addEventListener('click', handleDiceClick);

  document.querySelector('#dice4').addEventListener('click', handleDiceClick);

  document.querySelector('#dice5').addEventListener('click', handleDiceClick);

  document.querySelector('#dice6').addEventListener('click', handleDiceClick);
});
