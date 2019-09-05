// 1. Реализуйте функцию average с сигнатурой average(a: number, b: number): number calculating average (arithmetic mean).
console.log('=== TASK#1 ===');

let num1 = +prompt('Enter the number #1'),
    num2 = +prompt('Enter the number #2');

function averageNum(a, b) {
   return (a + b) / 2;
}

console.log(`{ Average value of numbers ${num1} and ${num2} } - ${averageNum(num1, num2)}`);


// 2. Реализуйте функцию square с сигнатурой square(x: number): number вычисляющую квадрат своего аргумента.
console.log('=== TASK#2 ===');

let num3 = +prompt('Enter the number');

function sqrt(num) {
   return num * num;
}

console.log(`{ Squared number } ${num3}^2 = ${sqrt(num3)}`);


// 3. Реализуйте функцию cube с сигнатурой cube(x: number): number вычисляющую куб своего аргумента.
console.log('=== TASK#3 ===');

let num4 = +prompt('Enter the number');

function cube(num) {
   return num * num * num;
}

console.log(`{ Cube of number } ${num4}^3 = ${cube(num4)}`);


// 4. Вызовите функции square и cube в цикле, передавая результаты их исполнения в функцию average. Выведите результаты вызова average.
console.log('=== TASK#4 ===');

let num5 = +prompt('Enter the number #1'),
    num6 = +prompt('Enter the number #2');

let averageFunc = (fun1, fun2) => (fun1 + fun2) / 2;

for (let i = 0; i < 1; i++) {
   console.log(sqrt(num5));
   console.log(cube(num6));

   console.log(`{ Average value of numbers ${sqrt(num5)} and ${cube(num6)} } - ${averageFunc(sqrt(num5), cube(num6))}`);
}
