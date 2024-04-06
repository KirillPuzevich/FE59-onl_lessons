"use strict";

// Задание 1

const colors = ['red', 'green', 'blue']

console.log(colors.length, colors);

//Задание 2

const animals = ['monkey', 'dog', 'cat']

console.log(animals[animals.length - 1]);

//Задание 3

const numbers = [5, 43, 63, 23, 90]

// numbers.splice(0,5);
numbers.length = 0;
console.log(numbers);

//Задание 4


const students = ['Polina', 'Dasha', 'Masha']

students.pop();
students.push('Borya');
students.shift();
students.unshift('Andrey')

console.log(students);

//Задание 5

const cats = ['Gachito', 'Tom', 'Batman']

for (let i = 0; i < cats.length; ++i) {
    console.log(cats[i]);
}

for (const key of cats) {
    console.log(key);
}


//Задание 6

const evenNumbers = [2, 4, 6, 8, 10]
const oddNumbers = [1, 3, 5, 7, 9]

const allNumbers = evenNumbers.concat(oddNumbers);

const index = allNumbers.indexOf(8);

console.log(allNumbers);
console.log(index);

//Задание 7


const binary = [0, 0, 0, 0]
let result = '';

for(let i = 0; i < binary.length; i++){
    if( i % 2 === 0){
        result += binary[i]; 
    } else {
        result += '1';
        binary.push('0')
    }
}

console.log(result);

// Задание 8

function palindrom(str) {
    return str.split('').reverse().join('') == str;
  }

  console.log(palindrom('ABA'));

// Задание 9

const matrix = [
    [12, 98, 78, 65, 23],
    [54, 76, 98, 43, 65],
    [13, 324, 65, 312],
    [9092, 22, 45, 90000],
]

let sum = 0;
for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    sum += matrix[i][j];
  }
}
let totalElements = 0;
for (let i = 0; i < matrix.length; i++) {
  totalElements += matrix[i].length;
}
let average = sum / totalElements;

console.log("Среднее значение:", average); 

// Задание 10

const mixedNumbers = [-14, 24, -89, 43, 0 , -1, 412, 4]
const positiveNumbers = []
const negativeNumbers = []

for (let i = 0; i < mixedNumbers.length; ++i){
    if(mixedNumbers[i] >= 0){
        positiveNumbers.push(mixedNumbers[i])
    } else {
        negativeNumbers.push(mixedNumbers[i])
    }
}

console.log(positiveNumbers)
console.log(negativeNumbers)


//Задание 11

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1))
  }
  
  const array = 5;
  
  const nums = [];
  for (let i = 0; i < array; i++) {
    nums.push(getRandomInt(1, 100));
  }
  
  const cubes = nums.map(num => num ** 3);
  
  console.log("Исходный массив:", nums);
  console.log("Новый массив:", cubes);
  
