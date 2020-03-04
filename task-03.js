"use strict";

const ADMIN_PASSWORD = "231";
let message;
let result = prompt();
if (result == null) {
  (message = "Отменено пользователем!"), alert(message);
} else if (ADMIN_PASSWORD == result) {
  (message = "Добро пожаловать!"), alert(message);
} else if (ADMIN_PASSWORD !== result) {
  (message = "Доступ запрещен, неверный пароль!"), alert(message);
}
