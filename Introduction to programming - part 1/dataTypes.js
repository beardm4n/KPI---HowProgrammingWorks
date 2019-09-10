'use strict';
/*
=================================
Скалярные и Ссылочные типы данных
=================================
 */

// 1. C сигнатурой inc(n: number): number, пример вызова: let a = 5; const b = inc(a); console.dir({ a, b });
let inc = a => ++a,
    a = 5;
const b = inc(a);

console.dir({ a, b });

/* 2. C сигнатурой inc(num: Num), где Num является объектом с полем n, чтобы функция изменила поле
      исходного объекта переданного по ссылке, пример вызова let obj = { n: 5 }; inc(obj); console.dir(obj); */

let obj = {
   n: 5
};

let func = num => ++num.n;

func(obj);

console.dir(obj);

/*
=================================
Типы объектов
=================================
 */

// 1. Создайте массив, содержащий названия различных типов данных, в качестве элементов, пример: ['number', 'string', 'number']

let arrayDataTypes = [true, 'hi', 53, [25, 'name', {age: 25}], 'undefined', -25, {arr: [12, 'text', false]}];

// 2. Создайте объект-коллекцию с именами типов в виде ключей и 0 в качестве значения, пример: { number: 0, string: 0 }
//    и так далее для всех типов данных.

let objectDataTypes = {
   number: 0,
   string: 0,
   boolean: 0,
   null: 0,
   undefined: 0,
   symbol: 0,
   object: 0
};

// 3. Пройдитесь по массиву циклом for..of и для каждого элемента массива, увеличивайте соответствующее значение в объекте-коллекции.

for (let dataTypes in objectDataTypes) {
   objectDataTypes[dataTypes] += 1;
   console.log(dataTypes + ' : ' + objectDataTypes[dataTypes]);
}

// 4. Измените пример: удалите все ключи из начальной коллекции и добавляйте их динамически используя цикл.

let emptyObjectDataTypes = {};

for (let i = 0; i < 7; i++) {
   let key = prompt('Input a key');
   emptyObjectDataTypes[key] = prompt('Input a value');
}

console.log(emptyObjectDataTypes);
