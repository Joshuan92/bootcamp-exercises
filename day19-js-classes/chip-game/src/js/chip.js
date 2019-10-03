/* eslint-disable linebreak-style */
/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */
class Chip {
  constructor() {
    // this.value = Math.floor(Math.random() * 10 + 1);
    this.gameScore = 0;
    this.color = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`;
    this.positionLeft = `${Math.floor(Math.random() * 90)}%`;
    this.positionTop = `${Math.floor(Math.random() * 90)}%`;
  }

  render() {
    const coinValue = Math.floor(Math.random() * 10 + 1);
    this.coin = document.createElement('div');
    this.coin.className = 'chip';
    this.coin.style.backgroundColor = this.color;
    this.coin.style.left = this.positionLeft;
    this.coin.style.top = this.positionTop;
    this.coin.addEventListener('click', () => {
      this.coin.style.display = 'none';
      this.gameScore += coinValue;
    });

    this.coin.innerHTML = (
      `<p>${coinValue}</p>`
    );
  }

  mount(parent) {
    this.render();
    parent.appendChild(this.coin);
    this.updateScore();
  }

  updateScore() {
    const score = document.querySelector('#gameScore');
    score.textContent = this.gameScore;
    console.log(score.textContent);
  }
}
