/* eslint-disable linebreak-style */
class Product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.email = `${this.name}@springfieldmail.com`;
  }

  sell(amount) {
    if (this.quantity - amount >= 0) {
      this.quantity = this.quantity - amount;
      return this.quantity;
    }

    alert('not enough products on store');
    return this.quantity;
  }

  buy(amount) {
    return this.quantity + amount;
  }
}

const products = [
  new Product('PC', 1000, 10),
  new Product('weed', 250, 102),
  new Product('cocaine', 2500, 15),
  new Product('bananas', 30, 10),
  new Product('condom', 20, 73),
  new Product('pile of shit', 100000, 1),
  new Product('bed', 15000, 30),
];
const list = document.querySelector('#shop');


const shop = () => {
  for (let i = 0; i < products.length; i++) {
    const productElement = document.createElement('div');
    productElement.className = 'item';
    productElement.innerHTML = (`
            <span>${products[i].name}</span>
            <span>${products[i].price}</span>
            <span class='quantity'>${products[i].quantity}</span>
            <div class="buyAmount">
                <button class='buy'>Buy</button>
                <input type="number" name="" id="input" value=0>
            </div>
           `);
    const btnBuy = productElement.querySelector('.buy');

    btnBuy.addEventListener('click', () => {
      const sellAmount = productElement.querySelector('input').value;

      console.log(sellAmount);

      console.log(products[i].quantity);
      const quantity = productElement.querySelector('.quantity');
      quantity.textContent = products[i].sell(sellAmount);
    });
    list.appendChild(productElement);
  }
};


document.addEventListener('DOMContentLoaded', shop);
