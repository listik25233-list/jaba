//5.1.
/*
//1.
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
const numRows = 8; // Количество строк
const numCols = 8; // Количество столбцов

//3.
let counter = 0;

//4.
for (let i = 0; i < numRows; i++) {

    let timeTable = [];

//5.
    for (let j = 0; j < numCols; j++) {
//6.
        counter++;

//7.
        timeTable.push(counter);
    }

//8.
    myTable.push(timeTable);
}
//9.
console.table(myTable);*/



//5.5.
/*
//1.
let grid = [];
//2.
const totalCells = 64;
//3.
let counter = 0;
//4.
let row = [];
//5.
for (let i = 0; i <= totalCells; i++) {
//6.
    if (i % 8 === 0) {
//7.
        if (row.length > 0) {
            grid.push(row);
//8.
            row = [];
        }
    }
//10. 
    let temp = counter;
    row.push(temp);
//11-12.
    if (i === totalCells) {
        grid.push(row);
    }
//9.
    counter++;
}
//13.
console.log(grid);*/


//5.6.
/*
//1.
let Arrayx = [];
//2.
for (let i = 1; i <= 10; i++) {
    Arrayx.push(i);
}
//3.
console.log(Arrayx);
//4.
for (let i = 0; i < Arrayx.length; i++) {
    console.log(Arrayx[i]);
}
//5.
for (let i = 0; i < Arrayx.length; i++) {
    console.log(Arrayx[i]);
}*/



//5.7.
/*
//1.
let carObject = {
    make: "Toyota",
    model: "Celica",
    year: "1998"
};
//2. 
console.log("Свойства для объекта:");
for (let key in carObject) {
    console.log(key + ": " + carObject[key]);
}
//3.
let carArray = [carObject.make, carObject.year, carObject.model];

console.log("Значение массива:");
for (let i = 0; i < carArray.length; i++) {
    console.log(carArray[i]);
}*/



//5.8.1.
/*
//1.
let output = "";
//2.
let skipNumber = 5;
//3.
for (let i = 1; i <= 10; i++) {
//4.
    if (i == skipNumber) {
//5.
        continue;
    }
//6.
    output += i + " ";
}
//7.
console.log("вывод с continue: " + output);


//5.8.2.
//1.
let outputSecond = "";
//2.
let skipNumberSecond = 5;
//3.
for (let i = 1; i <= 10; i++) {
//4.
    if (i == skipNumberSecond) {
//5.
        break;
    }
//6.
    outputSecond += i + " ";
}
//7.
console.log("вывод с break: " + outputSecond);*/