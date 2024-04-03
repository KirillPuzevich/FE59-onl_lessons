// Задание 1

const user = {
    name: 'Kirill',
    age: 20
}

delete user.name;
delete user.age

console.log(user);

//Задание 2
const man = {
    name: 'Kirill',
    age: 20
}

console.log("name" in man);
console.log("age" in man);

//Задание 3

const student = {
    name: 'John',
    age: 19,
    isHappy: true
}
for (key in student) {
    console.log(key, student[key]);
}

//Задание 4

const colors = {
    'ru pum pu ru rum': {
        red: 'красный',
        green: 'зеленый',
        blue: 'синий'
    },
}

console.log(colors['ru pum pu ru rum'].red);
console.log(colors['ru pum pu ru rum'].blue);

//Задание 5

let salaries = {
    andrey: 500,
    sveta: 413,
    anton: 987,
    igor: 664,
    alexandra: 199
}

let sum = 0;
let count = 0;
for (key in salaries) {
    sum += salaries[key]
    count++
}
const averageSum = sum / count
console.log(averageSum);

// Задание 6


// function validator() {
//     const login = prompt("Введите логин:");
//     const password = prompt("Введите пароль:");

//      const user = {
//         login,
//         password,
//     };

//     const confirmLogin = prompt("Подтвердите логин:");
//     const confirmPassword = prompt("Подтвердите пароль:");

//     if (user.login === confirmLogin && user.password === confirmPassword) {
//         alert("Добро пожаловать");
//     } else {
//         alert("Неверный логин или пароль");
//     }
// }

// validator();

// Задание 7

function describeScore(score) {
    const goals = ['ноль', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять'];

    const [team1, team2] = score.split(':');

    if (team1 > 9 || team2 > 9) {
        return 'Число забитых голов не должно превышать 9.';
    }

    const description = `Команда 1 забила ${goals[team1]} гола, а команда 2 забила ${goals[team2]} голов.`;

    return description;
}

const score = '2:5';
const resultDescription = describeScore(score);
console.log(resultDescription);


// Задание 8
let student1 = {
    name: 'Polina',
    age: 27,
};

let student2 = {
    name: 'Polina',
    age: 27,
};

if (JSON.stringify(student1) === JSON.stringify(student2)) {
    console.log('Объекты равны');
} else {
    console.log('Объекты не равны');
}

// Задание 9
const animals = {
    cat: {
        name: 'Енчик',
        age: 3,
    },
    dog: {
        name: 'Орео',
        age: 2,
    }
}

const birdName = animals?.bird?.name;


if (birdName) {
    console.log(`Имя птицы: ${birdName}`);
} else {
    console.log('Птицы в объекте нет');
}