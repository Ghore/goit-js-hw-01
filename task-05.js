"use strict";
let country = prompt("Выберите страну в которую желаете оформить доставку");
let cost;

switch (country) {
  case "Китай".toLowerCase():
    cost = 100;
    alert(`Доставка в вашу ${country} будет стоить ${cost} кредитов`);
    break;

  case "Чили".toLowerCase():
    cost = 250;
    alert(`Доставка в вашу ${country} будет стоить ${cost} кредитов`);
    break;

  case "Австралия".toLowerCase():
    cost = 170;
    alert(`Доставка в вашу ${country} будет стоить ${cost} кредитов`);
    break;

  case "Индия".toLowerCase():
    cost = 80;
    alert(`Доставка в вашу ${country} будет стоить ${cost} кредитов`);
    break;

  case "Ямайка".toLowerCase():
    cost = 120;
    alert(`Доставка в вашу ${country} будет стоить ${cost} кредитов`);
    break;

  default:
    alert("в вашу страну нет доставки");
}
