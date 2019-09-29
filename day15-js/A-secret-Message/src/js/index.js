// const houdiny = () => {
//   document.getElementById('padlock').className = 'shown';
// }
// ;

// document.addEventListener('DOMContentLoaded', () => {
//   const mouseeEnter = document.querySelector('#padlock');
//   mouseeEnter.addEventListener('mouseenter', houdiny);
// });

const test = document.getElementById('padlock');

// This handler will be executed only once when the cursor
// moves over the unordered list
test.addEventListener('mouseenter', (event) => {
  // highlight the mouseenter target
  document.getElementById('text').className = 'shown';

}, false);

// This handler will be executed every time the cursor
// is moved over a different list item
test.addEventListener('mouseleave', (event) => {
  // highlight the mouseover target
  document.getElementById('text').className = '';
}, false);
