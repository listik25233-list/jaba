
///3.1

/* 
1.
let products = ['Milk', 'Bread', 'Apples'];
2.
console.log(products.length);
3.
products[1] = 'Bananas';
4.
console.log(products); */

//3.2
/*
//1-2.
let shop = ['Milk', 'Bread', 'Apples'];
//3.
shop.splice(1,1, 'Bananas', 'Eggs');

//4.
let lastItem = shop.pop();
console.log(lastItem);
//5.
shop.sort();
console.log(shop);
//6.
let milk = shop.indexOf('Milk');
console.log(milk);

//7.
let bananas = shop.indexOf('Bananas');
if (bananas !== -1) {
  shop.splice(bananas + 1, 0, 'Carrots', 'Lettuce');
}
//8.
let newShop = ['Juice', 'Pop'];
//9.
shop = shop.concat(newShop, newShop);
//10.
let lastPopIndex = shop.lastIndexOf('Pop');
console.log(lastPopIndex);
//11.
console.log(shop);*/

//3.3.
/*
let Arra = [1,2,3];
let TrpileArra = [Arra, Arra, Arra];
console.log(TrpileArra[0][1]);*/

//3.4.
/*
//1.
let myCar = {
  make: 'Toyota',
  model: 'GT86',
  year: 2021,
  Electric: false
};

// 2.
let color = 'color';
myCar[color] = 'Red';

// 3.
color = 'forSale';
myCar[color] = true;

// 4. 
console.log('Make:', myCar.make);
console.log('Model:', myCar.model);

// 5. 
console.log('For Sale:', myCar.forSale);*/

//3.5.

//1.

let people = {
  friends: []
};
//2.
let friendFirst = { firstName: 'Leha', lastName: 'List', id: 1 };
let friendSecond = { firstName: 'Maks', lastName: 'Blackhole', id: 2 };
let friendThird = { firstName: 'Sanya', lastName: 'Sunstrike', id: 3 };
//3.
people.friends.push(friendFirst, friendSecond, friendThird);
//4.
console.log(people);
//