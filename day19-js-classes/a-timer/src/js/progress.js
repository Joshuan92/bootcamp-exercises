/* eslint-disable linebreak-style */
/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */

class Timer {
  constructor(value) {
    this.value = value;
    this.max = value;
    this.running = false;
    this.timeOut = null;
  }

  decrement() {
    if (this.value > 0) {
      this.value--;
    }
    this.updateProgress();
  }


  render() {
    this.element = document.createElement('div');
    this.element.className = 'main';
    this.element.innerHTML = (
      `<h2 id='progress'></h2>
  
      <div class="timer">
         
        <button id='reset'>Reset</button>
        <div class="progressBar">
          <span class= "timerBar" id='timerBar'></span>
        </div>
        <button id='start'>start</button>
      </div>
     
      <div class="range">
        <label for="range">Set up the timer in seconds.</label>
        <input type="number" name="range" id="range" value="0">
        <button type="submit" id='submit'>Submit</button>
      </div>`
    );

    const btnStart = this.element.querySelector('#start');

    btnStart.addEventListener('click', () => {
      if (this.running === false) {
        this.timeOut = setInterval(() => { this.decrement(); }, 1000);
        this.running = true;
        btnStart.textContent = 'Stop';
      } else {
        clearInterval(this.timeOut);
        this.running = false;
        btnStart.textContent = 'Start';
      }
    });

    const btnReset = this.element.querySelector('#reset');
    btnReset.addEventListener('click', () => {
      this.value = this.max;
      this.updateProgress();
      clearInterval(this.timeOut);
      this.running = false;
      btnStart.textContent = 'Start';
    });

    const btnColor = this.element.querySelector('#timerBar');
    btnColor.addEventListener('click', () => {
      this.updatecolor();
    });


    this.updateProgress();
  }

  mount(parent) {
    this.render();
    parent.appendChild(this.element);
    this.submit();
  }

  updateRange() {
    const progress = this.element.querySelector('#progress');
    if (this.value > 0) {
      progress.textContent = `Alarm in ${this.value} s `;
    } else {
      progress.textContent = 'Time is up!!!';
    }
  }

  updateProgress() {
    this.updateRange();
    const progressBar = this.element.querySelector('#timerBar');
    progressBar.style.width = `${100 * (1 - (1 - this.value / this.max))}%`;
  }


  updatecolor() {
    const color = this.element.querySelector('#timerBar');
    color.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`;
  }


  submit() {
    const submit = this.element.querySelector('#submit');
    submit.addEventListener('click', () => {
      const range = this.element.querySelector('#range').value;
      this.value = range;
      this.max = range;
      clearInterval(this.timeOut);
      this.running = false;
      const btnStart = this.element.querySelector('#start');
      btnStart.textContent = 'Start';
      this.updateRange();
      this.updateProgress();
    });
  }
}
