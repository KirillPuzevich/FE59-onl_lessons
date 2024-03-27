"use strict";

// Задание 1

const name = 'true';
const isName = false;
const count = 17;
const undef = undefined;
const countNull = null;

console.log(typeof name);
console.log(typeof isName);
console.log(typeof count);
console.log(typeof undef);
console.log(typeof countNull);


//Задание 2

const height = 15;
const width = 20;

if (height > width) {
    console.log("Наибольшее число:", height);
} else if (width > height) {
    console.log("Наибольшее число:", width);
} else {
    console.log("Числа равны");
}

//Задание 3

for (let index = 0; index < 20; ++index) {
    if (index % 3 === 0) {
        console.log(index);
    }
}

//Задание 4 

const key = true;
const documents = true;
const pen = true;
const apple = false;
const orange = true;

const shouldGoToWork = key && documents && pen && (apple || orange);

console.log("Можем идти на работу:", shouldGoToWork);

//Задание 5(закомментил чтобы не было ошибок в консоле)

// const numberToDivision = prompt('Укажите число которое хотите поделить:');

// if (Number(numberToDivision) % 5 === 0 && Number(numberToDivision) % 3 === 0 ) {
//     alert('FizBuz');
// }
// else if(Number(numberToDivision) % 5 === 0) {
//     alert('Fiz');
// }
// else if(Number(numberToDivision) % 3 === 0 ) {
//     alert('Buz');
// }
// else{
//     alert('Число не делиться на 5 или 3')
// }

//Задание 6(закомментил чтобы не было ошибок в консоле)
// const age = prompt('Укажите Ваш возраст!');

// if (Number(age) > 18) {
//     alert('Попей пивка');
// }
// else if (age >= 16 && age <= 18) {
//     alert("Можешь выкурить сигаретку, только маме не говори");
// } else {
//     alert("Пей колу");
// }


//Задание 7(закомментил чтобы не было ошибок в консоле)
// const sideWorld = prompt("В какую сторону света вы хотели бы отправиться? (Юг, Север, Запад, Восток)");
// switch (sideWorld) {
//     case 'Юг':
//         alert('на юг пойдешь счастье найдешь');
//         break;
//     case 'Север':
//         alert('на север пойдешь много денег найдешь');
//         break;
//     case 'Запад':
//         alert('на запад пойдешь верного друга найдешь');
//         break;
//     case 'Восток':
//         alert('на восток пойдешь разработчиком станешь');
//         break;
//     default:
//         alert('Попробуйте еще раз');
// }
//ПРОДВИНУТЫЙ УРОВЕНЬ



//Задание 1(закомментил чтобы не было ошибок в консоле)

// const nameLowUP = "пОлИнА нАбЕрЕжНаЯ";
// const lowerCaseName = nameLowUP.toLowerCase(); 
// const splitName = lowerCaseName.split(" "); 
// let correctedName = "";

// for (let i = 0; i < splitName.length; i++) {
//     const word = splitName[i];
//     const correctedWord = word[0].toUpperCase() + word.slice(1);
//     correctedName += correctedWord + " ";
// }

// alert(`Привет, ${correctedName}`); 


//Задание 2

for (let i = 1; i <= 6; i++) {
  let line = "";
  for (let j = 0; j < i; j++) {
    line += "#";
  }
  console.log(line);
}

//Задание 3(закомментил чтобы не было ошибок в консоле)
    
// const number = Number(prompt("Введите число:"));
    
// const result = number;

// while (true) {
//     alert(`Вы ввели число: ${result}`)
//   const operation = prompt("Введите операцию (+, -, *, /): ");
  
//   const operand = Number(prompt("Введите число для операции:"));
      
//   switch (operation) {
//     case "+":
//       result += operand;
//       break;
//     case "-":
//       result -= operand;
//       break;
//     case "*":
//       result *= operand;
//       break;
//     case "/":
//       if (operand === 0) {
//         alert("Ошибка: деление на ноль!");
//         continue;
//       }
//       result /= operand;
//       break;
//     default:
//       alert("Неверная операция!");
//       continue;
//   }
  
//   const continueCalculation = confirm("Продолжить (OK) или Завершить (Отмена)?");
//   if (!continueCalculation) {
//     break;
//   }
// }
  
// alert(`Результат: ${result}`);
  
  
  