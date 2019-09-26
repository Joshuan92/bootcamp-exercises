// const triangleArea = (w, h) => w * h / 2;

// const square = (a) => a * a;

// const hypotenuse = (x, y) => Math.sqrt(square(x) + square(y));

// const salary = (pay, hours, days) => pay * hours * days;

// const taxedSalary = (salary, tax) => salary * (1 - tax);

// const foo = (x) => 'my imput ';

// const greet = () => console.log('hello');

// setInterval(greet, 5000);

const x = 20;
const foo = (y, x) => y(x * x);
console.log(foo((x) => x + x, x));
