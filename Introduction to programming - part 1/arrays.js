'use strict';

/* 1. Объявите массив объектов с двумя полями: name и phone для хранения телефонной книги.
      Пример: { name: 'Marcus Aurelius', phone: '+380445554433' } */
let persons = [
   {
      name: 'Kobe',
      phone: '+1234567890'
   },
   {
      name: 'James',
      phone: '+0987654321'
   }
];

/* 2. Реализуйте функцию findPhoneByName с сигнатурой findPhoneByName(name: string): string.
         Вызов функция должна находить объект, где поле name равно аргументу name и возвращать
         номер телефона из объекта. */

let findPhoneByName = (arr) => {
   return console.log(`Hi's number is ${arr.phone}`)
};

persons.forEach((item) => findPhoneByName(item));