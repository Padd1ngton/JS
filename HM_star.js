let age_2 = 18
let age_3 = 60

//Task 1
const checkAge = function(age) {
    if (age < age_2) {
        return("You don’t have access cause your age is " + age + ". It’s less then ")
    } else if ((age >= age_2) && (age < age_3)) {
        return("Welcome  !")
    } else if (age  > age_3) {
        return("Keep calm and look Culture channel")
    } else {
        return("Technical work")
    }
    }
console.log(checkAge(10))

//Task 2

const checkAge2 = function(age) {
    if (typeof age != 'number') {
        return("Error!")
    } else if (age < age_2) {
        return("You don’t have access cause your age is " + age + ". It’s less then ")
    } else if ((age >= age_2) && (age < age_3)) {
        return("Welcome  !")
    } else if (age  > age_3) {
        return("Keep calm and look Culture channel")
    } else {
        return("Technical work")
    }
    }
console.log(checkAge2(10))

//Task 3

const checkAge3 = function(age) {
    if (/^[0-9]+$/.test(age) != 1) {
        return("Error!")
    } else if (age < age_2) {
        return("You don’t have access cause your age is " + age + ". It’s less then ")
    } else if ((age >= age_2) && (age < age_3)) {
        return("Welcome  !")
    } else if (age  > age_3) {
        return("Keep calm and look Culture channel")
    } else {
        return("Technical work")
    }
    }
console.log(checkAge3('10'))

//Task 4

var age_4 = prompt('Введите возраст', '')
console.log(checkAge3(age_4))