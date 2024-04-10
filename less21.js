// Задание 1

const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]

function printFibonacci (item){
    console.log(item)
}

fibonacci.forEach(printFibonacci);

fibonacci.forEach((item) => {
    console.log(item)
    
})

// Задание 2

const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton']

function printUsers (item, index){
    return `membet ${index +1 }: ${item}`  
}

const formatUsers = users.map(printUsers)

console.log(formatUsers);

const formatArrowUsers = users.map((item, index) =>`member ${index + 1}: ${item}`)

console.log(formatArrowUsers);

// Задание 3

const numbers = [7, -4, 32, -90, 54, 32, -21]

function printNumbers (item){
    return item > 0
}

const filterNumbers = numbers.filter(printNumbers);

console.log(filterNumbers);

const filterArrowNumbers = numbers.filter((item) => {

    return item > 0
})

console.log(filterArrowNumbers);

//Задание 4



const fibonacc = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]


function printFibonacc(accum, item){
    return accum + item
}

const sum = fibonacc.reduce(printFibonacc, 0)

console.log(sum);

const sumArrow = fibonacc.reduce((accum, item) => accum + item, 0)

console.log(sumArrow)


//Задание 5 

const number = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5]

function filterNumber(item){
    return item % 2 === 0
}

const findNumber = number.find(filterNumber)

console.log(findNumber)

const findArrow = number.find((item) => item % 2 === 0)

console.log(findArrow)

// Продвинутый уровень задание 2

const comment = "This website is for losers LOL!";

const removeComment = comment.replace(/[aeiouAEIOU]/g, '');

console.log(removeComment)

// Продвинутый уровень задание 3

const accum = str => {
    const result = [];
    str.split('').forEach((item, index) => {
        const repeatItem = item.toUpperCase() + item.toLowerCase().repeat(index);
        result.push(repeatItem);
    });
    return result.join('-');
};

console.log(accum('abcd'));


//Продвинутый уровень задание 4

const minMax = str => {
    const numbers = str.split(' ').map(Number);
    const max = Math.max(...numbers);
    const min = Math.min(...numbers);
    return `${max} ${min}`;
};

console.log(minMax('1 2 3 4 5')); 

//Продвинутый уровень задание 5

function isIsogram(str) {
    str = str.toLowerCase();
    
    return str.split('').every((item, index) => str.indexOf(item) === index && item.match(/[a-z]/));
  }
  
  console.log(isIsogram("Dermatoglyphics"));
  console.log(isIsogram("aba")); 
  console.log(isIsogram("moOse")); 

//Продвинутый уровень задание 7

function duplicate(word) {
    word = word.toLowerCase();
    let result = '';
    for (let i = 0; i < word.length; i++) {
        if (word.indexOf(word[i]) === word.lastIndexOf(word[i])) { 
            result += '(';
        } else {
            result += ')';
        }
    }
    return result;
}

let duplicateStr = 'recede';
let result = duplicate(duplicateStr);
console.log(result)