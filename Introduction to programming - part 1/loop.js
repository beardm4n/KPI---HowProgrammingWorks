// 1. Выведите все нечетные числа из диапазона [15, 30] включая крайние числа.
console.log('=== TASK#1 ===');

(function getTask1(){

let num1 = +prompt('Enter the number #1'),
    num2 = +prompt('Enter the number #2');

for (let i = num1; i <= num2; i++) {

   if (i % 2 === 0) {
      continue;
   } else {
      console.log(i);
   }
}

})();

// 2. Реализуйте функцию range(start: number, end: number) которая выполняет предыдущую задачу.
console.log('=== TASK#2 ===');

(function getTask2(){

let num1 = +prompt('Enter the number #1'),
    num2 = +prompt('Enter the number #2');

function range(start, end) {
   let arr = [],
       i = 0;
   for (start; start <= end; start++) {

      if (start % 2 === 0) {
         continue;
      } else {
         arr[i] = start;
         i++;
      }
   }
   return console.log(arr);
}
range(num1, num2);

})();