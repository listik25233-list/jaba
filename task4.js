//6.1.
/*//1.
function addNumbers(a, b) {
    return a + b;
}
//2.
let num1 = 10;
let num2 = 20;

//3.
let result1 = addNumbers(num1, num2);
console.log("Результат 1,2: " + result1);

//4.
let num3 = 5;
let num4 = 15;
let result2 = addNumbers(num3, num4);
console.log("результат 3,4: " + result2);*/



//6.2.
/*
//1.
let description = [
    "крут",
    "некрут",
    "goodgood",
    "плох",
    "сhto-to"
];

//2.
function getUserName() {
    let userName = prompt("Пожалуйста, введите ваше имя: ");
    return userName;
}

//3.
function getRandomDescription(descriptions) {
    let randomIndex = Math.floor(Math.random() * description.length);
    return description[randomIndex];
}

//4.
function displayResult() {
    let userName = getUserName();
    let randomDescription = getRandomDescription(description);
    console.log("Имя пользователя: " + userName);
    console.log("Описание: " + randomDescription);
}

//5.
displayResult();*/


//6.3.
/*
//1.
let num1 = 10;
let num2 = 5;
//2.
let operator = "+";
//3.
function calculate(a, b, op) {
    if (op === "+") {
        return a + b;
    } else if (op === "-") {
        return a - b;
    } else {
        return a + b;
    }
}

//4.
let result1 = calculate(num1, num2, operator);
console.log("результат" + operator + ": " + result1);

//5.
operator = "-";
let result2 = calculate(num1, num2, operator);
console.log("результат" + operator + ": " + result2);*/


//6.4.
/*
//1.
let results = [];

//3.
function calculateSum(a, b) {
    return a + b;
}

//2.
for (let i = 0; i < 10; i++) {
    let value1 = i * 5;
    let value2 = i * i;

    let result = calculateSum(value1, value2);
    results.push(result);
}

console.log(results);*/

//6.5.
/*
//1.
let myVar = 1000;

//2.
(function() {
    let myVar = 2000;
    console.log("Inside IIFE: " + myVar);
})();

//3.
let result = (function() {
    let myVar = 3000;
    return myVar;
})();
console.log("Value of result: " + result);

//4.
(function(newValue) {
    let myVar = newValue;
    console.log("Inside anonymous function: " + myVar);
})(4000);*/



//6.6.
/*
//1.
function factorial(n) {
//2.
    if (n == 0) {
        return 1;
    } else {
        console.log("значение для n: " + n);
        return n * factorial(n - 1);
    }
}

//3.
let number = 5; 
let result = factorial(number);
console.log("факториал " + number + ": " + result);

//4.
number = 7;
result = factorial(number);
console.log("факториал " + number + ": " + result);*/




//6.7.
/*
//1.
let start = 10;

//2.
function countdown(n) {
//3.
    console.log("отсчет: " + n);

//4.
    if (n < 1) {
        return;
    }
//5.
    if (n >= 1) {
//6.
        return countdown(n - 1);
    }
}
//7.
function countdown2(n) {
//8.
    if (n > 0) {
        console.log("отсчет2: " + n);
        return countdown2(n - 1);
    } else {
        return;
    }
}

//9.
countdown(start);
countdown2(start);*/



//6.8.
//1.
let printArgument = function(arg) {
    console.log(arg);
};
//2.
printArgument("Hello, World!");

//3.
function printArgument2(arg) {
    console.log(arg);
}
printArgument2("Hello again, World!");