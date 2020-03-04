"use strict";

const credits = 23580;
const pricePerDroid = 3000;
let result = prompt("какое количество дроидов желаете купить?");
let message;
let totalPrice = pricePerDroid * result;
let balance = credits - totalPrice;
if (result == null) {
  (message = "Отменено пользователем!");
} else if(totalPrice > credits) {
  (message = "Недостаточно средств на счету!");
} else {
    message = `Вы купили ${result} дроидов, на счету осталось ${balance} кредитов.`;
}
alert(message)