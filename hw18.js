//Задание 1

function getsum(number) {
    let sum = 0;

    for (let i = 0; i <= number; i++) {
        sum += i;
    }
    return sum;
}

console.log(getsum(100))

//Задание 2

function credit(sumCredit) {
    const interestRate = 17 / 100;
    const year = 5

    const totalSum = sumCredit * (interestRate * year);

    return totalSum;
}

const totalSum = credit(10000);
console.log(`Переплата по кредиту составит: ${totalSum} рублей`);

//Задание 3

function trimString(str, from, to) {


    return str.slice(from, to)
}


console.log(trimString(`ОООбрезатьььь`, 2, 10));

//Задание 4


function getSumNumbers(number) {
    const str = number.toString();
    let sum = 0;

    for (let i = 0; i < str.length; i++)
        sum += +str[i]


    return sum;

}

const sum = getSumNumbers(2021);


console.log(sum);

//Задание 5

function getSum(a, b) {
    if (a === b) {
        return a;
    }
    const min = Math.min(a, b);
    const max = Math.max(a, b);
    let sum = 0;

    for (let i = min; i <= max; i++) {
        sum += i;
    }

    return sum;
}
const result = getSum(1, 5);
console.log(result);

//Задание 6

function fooBoo(bool, foo, boo) {
    return bool === true ? foo() : boo();
}
  
function funFoo() {
    return "foo";
}
  
function funBoo() {
    return "boo";
}

console.log(fooBoo(false, funFoo, funBoo));

// Задание 7

function triangle(a,b,c){
    if(a <= 0 || b <=0 || c <= 0){
        return false
    } else if (a + b > c && a + c > b && b + c > a){
        return true
    } else {
        return false
    }
}
 console.log(triangle(1,3,3))

 //Задание 8
 function chocolate(n, m) {
    if (n <= 0 || m <= 0) {
        return 0;
    } else {
        return n * m - 1;
    }
}

console.log(chocolate(2, 1)); 