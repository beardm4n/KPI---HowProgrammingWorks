'use strict';

// 1. Создайте объект с одним полем name и присвойте его в константу.
const obj1 = {
   name: 'John'
};

// 2. Создайте объект с одним полем name и присвойте его в переменную.
let obj2 = {
   name: 'Jack'
};

// 3. Попробуйте поменять поле name у обоих объектов.
obj1.name = 'Susan';
obj2.name = 'Sara';

console.log(obj1);
console.log(obj2);

// 4. Попробуйте присвоить другой объект в оба идентификатора.
let obj3 = {
  name: 'Joker'
};

// obj1 = obj3;
obj2 = obj3;

// 5. Объясните поведение кода.
// нельзя переприсвоить константу, она защищена от изменений. можно только изменить свйства внутри неё.

/* 6. Реализуйте функцию createUser с сигнатурой createUser(name: string, city: string): object.
         Пример вызова: createUser('Marcus Aurelius', 'Roma') функция должна
         вернуть объект { name: 'Marcus Aurelius', city: 'Roma' }
*/

let creatUser = (name, city) => {
   return {
     name,
     city
  };
};

console.log(creatUser('Marcus Aurelius', 'Roma'));