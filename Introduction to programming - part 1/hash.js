'use strict';
// 1. Задайте хеш с ключами значениями поля name (из предыдущего примера) и значениями равными полю phone.

let persons = {
   Kobe: {phone: '+1234567890'},
   James: {phone: '+0987654321'}
};

/* 2. Реализуйте функцию findPhoneByName с сигнатурой findPhoneByName(name: string): string которая
      находит телефон в хеше по имени и возвращает номер телефона. Используйте hash[key] для
      поиска телефона. */
let findPhoneByName = (obj) => console.log(`The phone number is ${obj.phone}`);

for (let key in persons) {
   let person = persons[key];

   findPhoneByName(person);
}