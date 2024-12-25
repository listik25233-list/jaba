//4.1
/*//1.
let bul = true;
//2.
console.log(bul);
//3-4.
if (bul) {
    console.log("все правильно");
}
else {
    console.log("ne true");
}

if (!bul) {
    console.log ("chto-to");
}
//5.
bul = false

if (bul) {
    console.log("inoe");
}*/

//4.2.
/*//1.
let age = prompt("vvdei vozrast:");
//2.
age = Number(age);
//3.
let message;
//4.
if (age > 21) {
    message = "разрешить вход в заведение и покупку алкоголя";
}
//5.
else if (age > 19) {
    message = "разрешить вход в заведение и запретить покупку алкоголя";
}
//6.
else {
    message = "запретить вход";
}
//7.
console.log(message);*/

//4.3
/*
//1.
let ID = true
//2.
let messageTwo = ID ? "разрешить" : "запретить";
//3.
console.log(messageTwo);*/
//4.4.
/*
//1.
let randomNumber = Math.floor(Math.random() * 6);
//2.
let usermessage = prompt("введи:");
//4.
let messageThree;
//3.
switch (randomNumber) {
    case 0:
        message = "Да, это хорошая идея!";
        break;
    case 1:
        message = "Не уверен, стоит подумать.";
        break;
    case 2:
        message = "Нет, лучше не стоит.";
        break;
    case 3:
        message = "Может быть, но нужно уточнить.";
        break;
    case 4:
        message = "Определенно да!";
        break;
    case 5:
        message = "Я бы не рекомендовал этого делать.";
        break;
    default:
        message = "Что-то пошло не так!";
        break;
}
//4.
console.log("запрос" + usermessage);
console.log("ответ"+ message);*/

//4.5.
//1.
/*
let prize = prompt("Выберите число:");

//2.
prize = Number(prize);

//3.
let message;
//4-5.
switch (prize) {
    case 0:
    case 1:
        message += " Вы выиграли ключку!";
        break;
    case 2:
    case 3:
        message += " Вы выиграли мяч!";
        break;
    case 4:
    case 5:
        message += " Вы выиграли футболку!";
        break;
    case 6:
    case 7:
        message += " Вы выиграли кепку!";
        break;
    case 8:
    case 9:
        message += " Вы выиграли рюкзак!";
        break;
    case 10:
        message += " Вы выиграли главный приз!";
        break;
    default:
        message += " Неверный ввод.";
}

//6.
alert(message);*/

