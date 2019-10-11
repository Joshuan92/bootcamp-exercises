/* eslint-disable linebreak-style */
console.log('It works');

const list = document.querySelector('#list');

const shoppingList = [
  { name: 'banana', amount: '5kg' },
  { name: 'apples', amount: '3kg' },
  { name: 'chocolate', amount: '2 bars' }];


const createShoppingList = () => {
  for (let i = 0; i < shoppingList.length; i++) {
    const msgElm = document.createElement('div');
    msgElm.className = 'item';
    msgElm.innerHTML = (`
            <span>${shoppingList[i].name}</span>
            <span>${shoppingList[i].amount}</span>
           `);

    list.appendChild(msgElm);
  }
};

const subButton = document.querySelector('#btn');
subButton.addEventListener('click', () => {
  const newItem = document.querySelector('#newItem').value;
  const newAmount = document.querySelector('#newAmount').value;
  const itemObject = { name: newItem, amount: newAmount };
  shoppingList.push(itemObject);

  const msgElm = document.createElement('div');
  msgElm.className = 'item';
  msgElm.innerHTML = (`
            <span>${shoppingList[shoppingList.length - 1].name}</span>
            <span>${shoppingList[shoppingList.length - 1].amount}</span>
           `);

  list.appendChild(msgElm);
});


document.addEventListener('DOMContentLoaded', () => {
  createShoppingList();
});
