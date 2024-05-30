"use strict";

const subjects = {
    mathematics: {
    students: 200,
    teachers: 6
    },
    biology: {
    students: 120,
    teachers: 6
    },
    geography: {
    students: 60,
    teachers: 2
    },
    chemistry: {
    students: 100,
    teachers: 3
    }
    }

const nameSubject = Object.keys(subjects).join(', ')

let sumTeachers = 0;
let sumStudents = 0;

for(let value of Object.values(subjects)){
    console.log(value)
    sumTeachers += value.teachers
    sumStudents += value.students
}

const sumSubject = Object.keys(subjects).length;
const averageStudents = sumStudents / sumSubject


const arraySubjects = Object.entries(subjects).map(([subject, {students, teachers}]) => ({subject, students, teachers}))

const sortArray = arraySubjects.sort((max, min) => min.teachers - max.teachers)

console.log(nameSubject)
console.log(sumStudents)
console.log(sumTeachers)
console.log(averageStudents)
console.log(arraySubjects)
console.log(sortArray)