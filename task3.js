//5.1.
//1.
/*
const max = 5;

//2.
const randomNumber = Math.floor(Math.random() * max) + 1;
console.log("Полученное число:", randomNumber);

//3.
let isGuessed = false;

//4.
while (!isGuessed) {
    const userInput = prompt(`Угадайте число от 1 до ${maxValue}:`);
    const userGuess = parseInt(userInput, 10);

    if (userGuess === randomNumber) {
        alert("Поздравляем! Вы угадали число!");
        isGuessed = true; 
        break;
    } else if (userGuess < randomNumber) {
        alert("Загаданное число больше. Попробуйте ещё раз.");
    } else if (userGuess > randomNumber) {
        alert("Загаданное число меньше. Попробуйте ещё раз.");
    } else {
        alert("Введите корректное число.");
    }
}*/

//5.2.
/*
// 1.
let counter = 0;

//2.
const step = 5;

//3.
do {
    console.log("Текущее значение счетчика:", counter);
    counter += step;
} while (counter < 100);

//4.
console.log("Цикл завершен. Финальное значение счетчика:", counter);*/

//5.3

/*//1.
const myWork = [];

//2.
for (let i = 1; i <= 10; i++) {
//3.
    const status = (i % 2 === 0) ? false : true;

//4.
    const lesson = {
        name: `Lesson ${i}`,
        status: status
    };

//5.
    myWork.push(lesson);
}

//6.
console.log(myWork);*/

//5.4.
/*//1.
let myTable = [];

//2.
let rows = 5;  
let columns = 4;  

//3.
let counter = 0;

//4.
for (let i = 0; i < rows; i++) {

    let TempTable = [];

//5.
    for (let j = 0; j < columns; j++) {
        
        counter++;

//6.
        TempTable.push(counter);
    }

//7.
    myTable.push(TempTable);
}

//8.
console.table(myTable);*/

