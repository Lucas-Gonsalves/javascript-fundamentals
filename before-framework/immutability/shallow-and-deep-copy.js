// Shallow Copy: It does not pick up nested items

const htmlCourse = {
  course: 'HTML',
  students: [{name: 'Lucas', email: 'lucas@email.com'}]
}

const jsCourse = {
  ...htmlCourse,
  course: 'JavaScript',
}

// overwrite the data of both
jsCourse.students.push({name: 'Jhon', email: 'jhon@email.com'})

console.log(htmlCourse, jsCourse)


// Deep Copy

const tsCourse = {
  ...htmlCourse,
  course: 'TypeScript',
  students: [...htmlCourse.students, {name: 'Jhon', email: 'jhon@email.com'}]
}

tsCourse.students.push({name: 'Jhon', email: 'jhon@email.com'})

console.log(htmlCourse, tsCourse)


const cssCourse = {
  ...htmlCourse,
  course: 'CSS',
}

cssCourse.students = [...htmlCourse.students, {name: 'Jhon', email: 'jhon@email.com'}]
