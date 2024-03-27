"use strict";

// const num = 0;
// const sum = 5 + 4;
// const subtraction = 7.5 - 3;
// const multiplication = 7 * 15; // 105
// const division = 7 / 15;
// const notFun = 0.1 + 0.1; // 0.2
// // Неправильное поведение JS
// const fun = 0.1 + 0.2; // 0.3

// // typeof null === "object"; // === {}

// console.log(notFun);
// console.log(fun);
// console.log(fun.toFixed(2)); // теперь это страка
// console.log((10 / 3).toFixed(2))

// const exponentiation = 3 ** 3; // 27
// const remainderDivision = 6 % 3; // 0
// const remainderDivision = 6 % 4; // 2
// const remainderDivision = 7 % 3; // 1

// console.log(remainderDivision)

// let num = 25;
// console.log(num)

// num = num + 1;
// // ====
// num += 1;

// console.log((10 / 3).toFixed(2))

// let newSum = 0;
// newSum  = newSum + 1; // это все ожно и тоже
// newSum += 1; // это все ожно и тоже
// ++newSum; // это все ожно и тоже

// newSum = newSum + 5; // 5
// newSum += 5; // 10
// console.log(newSum)

// newSum = newSum - 2; // 8
// newSum -= 2; // 6
// --newSum; // 

// console.log(newSum)

// newSum = newSum * 2; // 12
// newSum *= 2; // 24

// console.log(newSum)

// newSum = newSum / 2; //12
// newSum /= 2; // 6

// console.log(newSum)

// ++newSum; // инкремент
// console.log(newSum)

// --newSum; // декремент
// console.log(newSum)


// !!!!!!!!!!!!!!!!! СРАВНЕНИЕ !!!!!!!!!!!!!!!!!
// let a = 5;
// let b = 10;

// a < b // true
// a <= b // true
// a > b // false
// a >= b // false

// = - это присваивание
// == - нестрогое равенство // приводит каждое значение к булевому типу Boolean(variable) и опирается на тип переменной || !variable
// === - строгое равенство // равенство на тождество
// != - нестрогое НЕравенство
// !== - строгое НЕравенство // НЕравенство на тождество

// a == b
// a != b
// a === b // почти всегда юзаются
// a !== b // почти всегда юзаются

// console.log(Boolean(5)) === console.log(!!5)
// console.log(!!5)
// console.log(!5)

// console.log(5 == 10)
// console.log(5 != 10)
// console.log(null == undefined)
// console.log(null != undefined)
// console.log([] == 'Jon')
// console.log([] != 'Jon')

// console.log(5 === 10) // 5 равно 10 ? false
// console.log(5 !== 10) // 5 НЕравно 10 ? true
// console.log(null === undefined) // false
// console.log(null !== undefined) // true
// console.log([] === 'Jon')
// console.log([] !== 'Jon')

// console.log(!true);// false
// console.log(!false); // true
// console.log(!'Hello'); // false
// console.log(!''); // true
// console.log(!235); // false
// console.log(!0); // true

// console.log(!!true); //true
// console.log(!!false); // false
// console.log(!!'Hello'); //true
// console.log(!!''); // false
// console.log(!!235); //true
// console.log(!!0); // false

// isBirToday = '26.03' === '26.03' //  если здесь true - то нам предлагают скидку

// const isBirToday = '26.03' === '26.03';
// const isMan = true;
// const city = 'Minsk';

// && - это логическое значение "и" // 
// a && b // возвращает true если a и b истинны и false если хотя бы одно из них ложно
// || - это логическое значение "или" 
// a || b // возвращает true если хотя бы одно из них истинно и false если они все ложны
// ! - не, т.е. противоположность

// если isBirToday === true и isMan === true и city === 'Minsk' - то предлагаем бонус от сайта

// const isShowContentForMan = Boolean(isBirToday) && Boolean(isMan) && city === 'Minsk';
// const isShowContentForMan = !!isBirToday && !!isMan && city === 'Minsk';
// const isShowContentForMan = isBirToday && isMan && city === 'Minsk';

// const currentContreCod = 'uz';
// RU  BY ES DK UZ

// const isAlcoAvail = currentContreCod === 'uz' // true - то мы алкоголь не показываем

// const lang = 'en';

// const result = 10 && 7; // true
// const result = 10 && null; // false

// const age = prompt('Укажите Ваш возраст!');

// if (Number(age) >= 18) {
//     alert('мы показываем вам контент 18+');
// }


// const age = 19;

// if (age > 18) {
//     console.log('Мы показываем вам контент 18+');
// }

// if (age === 18) {
//     console.log('Поздравляю с совершеннолетием!');
// }

// if (age < 18) {
//     console.log('Подрасти чуток, братишка');
// }
// //  === это тоже самое
// if (age > 18) {
//     console.log('Мы показываем вам контент 18+');
// } else if(age === 18) {
//     console.log('Поздравляю с совершеннолетием!');
// } else {
//     console.log('Подрасти чуток, братишка');
// }

// if (age >= 18) {
//     console.log('Мы показываем вам контент 18+');
// } else {
//     console.log('Подрасти чуток, братишка');
// }

// Всегда равно false: undefined || null || NaN || false || 0 || '';

// const useName = 'Ivan';

// if (useName === 'Ivan') {
//     console.log('Ivan');
// } else if (useName === 'Andrey') {
//     console.log('Andrey');
// } else if (useName === 'Petr') {
//     console.log('Petr');
// } else {
//     console.log('Ты кто?');
// }

// ОЧЕНЬ РЕДКО
// switch (useName) {
//     case 'Ivan':
//         console.log('Ivan');
//         break;
//     case 'Andrey':
//         console.log('Andrey');
//         break;
//     case 'Petr':
//         console.log('Petr');
//         break;
//     default: 
//         console.log('Ты кто?');
// }

// ЦИКЛЫ:
// for
// while
// do while (этот сильно устарел)

// const name = 'ivan';
// const charV = name[1]; // v

// const array = ['Ivan', 'Jon', 'Bill']; //0, 1, 2

// for(let index = 0; index < array.length; ++index) {
//     // console.log(array[index] + '@gmail.com');
//     console.log(`${array[index]}@gmail.com`);
// }

// for(let index = 0; index < 10; ++index) {
//     if (index === 5) {
//         continue;
//         console.log('УРА!!!!!', index);
//         // break; // полное прерываение цикла
//     }

//     console.log(index);
// }

// let count = 15515;

// while(count <= 10) {
//     console.log(count);
//     ++count;
// }

// do {
//     console.log(count);
// } while(count <= 10);

// const isMan = false;
// const isCityMinsk = false;

// if (isMan && isCityMinsk) {
//     console.log('Значения истинны')
// } else {
//     console.log('Все не так!')
// }

// if (isMan || isCityMinsk) {
//     console.log('Значения истинны')
// } else {
//     console.log('Все не так!')
// }


