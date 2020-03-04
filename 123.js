"use strict";

// const quantityStudents=15;
// const isOk=confirm('начать случайный выбор студентов');
// let randomNamber=Math.random() *quantityStudents;
// if(isOk){
//     console.log(Math.ceil(Math.random()*quantityStudents));
// }

// next

// const USER_AGE = 21;
// let userChoice = confirm("Хотите купить конфет?");
// let userAge;
// if (userChoice) {
//   userAge = prompt("Введите Ваш возраст!");
//   if (Number.isNaN(Number(userAge))) {
//     alert("Вы ввели неправильный символ!");
//   } else {
//     alert("Вы купили конфеты!");
//   }
// } else {
//   userChoice = confirm("Хотите пива?");
//   if (userChoice) {
//     userAge = prompt("Введите Ваш возраст!");
//     if (Number.isNaN(Number(userAge))) {
//       alert("Вы ввели неправильный символ!");
//     } else {
//       // alert('Вы купили пиво!');
//       if (userAge >= USER_AGE) {
//         alert("Вы купили пиво!");
//       } else {
//         alert("Вы еще малолетка!");
//       }
//     }
//   } else {
//     alert("Отменено пользователем!");
//   }
// }

// next

// const OPERATIONS = "+-/*";
// let firstNumber;
// let secondNumber;
// let symbol;
// let sum;
// do {
//   firstNumber = prompt("Enter the first number");
//   if (firstNumber === null) {
//     break;
//   }
// } while (Number.isNaN(Number(firstNumber)));
// do {
//   secondNumber = prompt("Enter the second number");
//   if (secondNumber === null) {
//     break;
//   }
// } while (Number.isNaN(Number(secondNumber)));
// do {
//   symbol = prompt("Enter the symbol");
//   if (symbol === null) {
//     break;
//   }
// } while (!OPERATIONS.includes(symbol) || symbol.length !== 1);
// if(firstNumber===null||symbol===null||secondNumber===null){
//   alert('Canceled by user');
// }else{
//   firstNumber=Number(firstNumber);
//   secondNumber=Number(secondNumber);

//   switch(symbol)
//     {
//       case "+":
//       sum = firstNumber+secondNumber ;
//       break;
//       case "-":
//       sum = firstNumber-secondNumber ;
//       break;
//       case "*":
//       sum = firstNumber*secondNumber ;
//       break;
//       case "/":
//       sum = firstNumber/secondNumber ;
//       break;
//     }
//   alert(sum);
// }

// next в классе делали 

const users = ["aNn", "SeRg", "LoliTa", "LIza", "dOg"];

function foo(arr) {

  for (let i = 0; i < users.length; i++) {
    let user = users[i].toLowerCase();
    user = user[0].toUpperCase() + user.substring(1);
    console.log(user);
  }

}

//console.log(foo(users)); // ['Ann', 'Serg', 'Lolita', 'Liza', 'Dog']
