/* eslint-disable linebreak-style */
/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */

class ProgressBar {
  constructor(value, max) {
    this.value = value;
    this.max = max;
  }

  increment() {
    if (this.value < this.max) {
      this.value++;
    }
  }

  decrement() {
    if (this.value > 0) {
      this.value--;
    }
  }

  render() {
    this.element = document.createElement('div');
    this.element.className = 'main';
    this.element.innerHTML = (
      `<h2 id='progress'></h2>
  
      <div class="mybar">
         
        <button id='minus'>-</button>
        <div class="progressBar">
          <span class= "orange" id='orange'></span>
        </div>
        <button id='plus'>+</button>
      </div>
     
      <div class="range">
        <label for="range">choose your range 0/x</label>
        <input type="number" name="range" id="range" value="0">
        <button type="submit" id='submit'>Submit</button>
      </div>`
    );


    const btnPlus = this.element.querySelector('#plus');
    btnPlus.addEventListener('click', () => {
      this.increment();
      this.updateProgress();
    });


    const btnMinus = this.element.querySelector('#minus');
    btnMinus.addEventListener('click', () => {
      this.decrement();
      this.updateProgress();
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
    progress.textContent = `${this.value}/${this.max}`;
  }

  updateProgress() {
    this.updateRange();
    const progressBar = this.element.querySelector('#orange');
    progressBar.style.width = `${this.value * 100 / this.max}%`;
  }

  submit() {
    const submit = this.element.querySelector('#submit');
    submit.addEventListener('click', () => {
      const range = this.element.querySelector('#range').value;
      this.max = range;
      this.value = this.max / 2;
      this.updateRange();
      this.updateProgress();
    });
  }
}
