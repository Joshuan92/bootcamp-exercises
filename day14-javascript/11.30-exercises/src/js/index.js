
const changeTitle = () => {


  const title = document.querySelector('#title');
  title.textContent = 'bananas';
  title.className = 'heading';
};

document.addEventListener('DOContentLoaded');
const myBtn = document.querySelector('#my-btn');
myBtn.addEventListener('click', changeTitle);
