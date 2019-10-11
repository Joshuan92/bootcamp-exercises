/* eslint-disable linebreak-style */
/* eslint-disable no-plusplus */
/* eslint-disable max-len */

const numbers = [18, 8, -24, 28, -17, 14, -10, 24, 12, -31, 19, 32, -14, -10, 13, 8, -15, -2, 17];

// Output the number of items in the array to the console
// console.log(numbers.length);

// Output the number at the index 13 to the console.
// console.log(numbers[13]);

// Output the number which is exactly in the middle of the array.
// console.log(numbers[Math.floor(numbers.length / 2)]);

// Output every number in the array to the console.
// for (let i = 0; i <= numbers.length - 1; i++) {
//   console.log(numbers[i]);
// }

// Output the square of every number to the console.
// for (let i = 0; i <= numbers.length - 1; i++) {
//   console.log(numbers[i] * numbers[i]);
// }

// Output only negative numbers from the array.
// for (let i = 0; i <= numbers.length - 1; i++) {
//   if (numbers[i] <= 0) {
//     console.log(numbers[i]);
//   }
// }

// Output an absolute value of every number in the array.
// for (let i = 0; i <= numbers.length - 1; i++) {
//   if (numbers[i] <= 0) {
//     console.log(-numbers[i]);
//   } else {
//     console.log(numbers[i]);
//   }
// }

// Output only those numbers which absolute value id divisible by 3.
// for (let i = 0; i <= numbers.length - 1; i++) {
//   if (numbers[i] % 3 === 0) {
//     console.log(numbers[i]);
//   }
// }

// Output only even numbers from the array.
// for (let i = 0; i <= numbers.length - 1; i++) {
//   if (numbers[i] % 2 === 0) {
//     console.log(numbers[i]);
//   }
// }

// For every number in the array output the difference between that number and number 5.
// for (let i = 0; i <= numbers.length - 1; i++) {
//   console.log(numbers[i] - 5);
// }

// For every number in the array output the squared difference of that number and number 5.
// for (let i = 0; i <= numbers.length - 1; i++) {
//   console.log((numbers[i] - 5) ** 2);
// }

// Output all the numbers which are greater then their predecessor in the array.
// for (let i = 1; i <= numbers.length - 1; i++) {
//   if (numbers[i] > numbers[i - 1]) { console.log((numbers[i])); }
// }

// Output all the peaks in the array. A peak is a number whose predecessor and succesor are both smaller then the number itself.
// for (let i = 1; i <= numbers.length - 1; i++) {
//   if (numbers[i] > numbers[i - 1] && numbers[i] > numbers[i + 1]) { console.log((numbers[i])); }
// }


// Count how many negative numbers are there in the array.
// let count = 0;
// for (let i = 0; i <= numbers.length - 1; i++) {
//   if (numbers[i] < 0) {
//     count++;
//   }
// }
// console.log(count);

// // Compute the sum of all the numbers in the array.
// let sum = 0;
// for (let i = 0; i <= numbers.length - 1; i++) {
//   sum += numbers[i];
// }
// console.log(sum);

// Compute the average of the numbers in the array
// let sum = 0;
// for (let i = 0; i <= numbers.length - 1; i++) {
//   sum += numbers[i];
// }
// console.log(sum / numbers.length);

// Compute the sum of all the positive numbers in the array.
// let sum = 0;
// for (let i = 0; i <= numbers.length - 1; i++) {
//   if (numbers[i] > 0) {
//     sum += numbers[i];
//   }
// }
// console.log(sum);

// Compute the sum of all the positive numbers in the array.
// let sum = 0;
// for (let i = 0; i <= numbers.length - 1; i++) {
//   if (numbers[i] > 0) {
//     sum += numbers[i];
//   }
// }
// console.log(sum);

// First, compute the average number in the array and save the result in variable. Then compute the sum of squared differences from the average.
// let sum = 0;
// for (let i = 0; i <= numbers.length - 1; i++) {
//   sum += numbers[i];
// }

// const avg = sum / numbers.length;

// let sumDev = 0;
// for (let i = 0; i <= numbers.length - 1; i++) {
//   sumDev += (numbers[i] - avg) * (numbers[i] - avg);
// }

// console.log(sumDev);

// Compute the variance of the array. Variance is the average of squared differences from the average.
// let sum = 0;
// for (let i = 0; i <= numbers.length - 1; i++) {
//   sum += numbers[i];
// }

// const avg = sum / numbers.length;

// let variance = 0;
// for (let i = 0; i <= numbers.length - 1; i++) {
//   variance += (numbers[i] - avg) * (numbers[i] - avg);
// }

// console.log(variance / (numbers.length));

// Find the length of the longest ascending sequence of consecutive numbers in the array.
let count = 0;
for (let i = 0; i <= numbers.length - 1; i++) {
  if ((numbers[i + 1] - numbers[i]) === -1) {
    count++;
  }
}
console.log(count);
