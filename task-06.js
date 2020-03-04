"use strict";
let input;
let total = Number ("0");
let message;

while (true){
    let input = prompt('Введите число');
    if (input === null){
        break;
    }
    if (!Number.isNaN(Number(input))){
        total = total + Number(input);
        message = `Общая сумма чисел равна ${total}.`;
        }
    else {
        message = 'Вы ввели неправильный символ!';
    }
}
alert(message);