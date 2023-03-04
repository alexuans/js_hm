// 1. Створити новий масив на 10 елементів з довільними числами.

// 2. Написати скрипт для пошуку суми елементів масиву

// 3. Написати скрипт, який буде шукати мінімальне та максимальне значення елементів масиву.

// 4. В пунктах 2 та 3 потрібно робити перевірку на тип елементу масиву і не брати до уваги елементи які не є числами

const arr = [1, 3, 4, 5, 2, 7, 10, 8, 9, 6];
let sum = 0;

//Sum

for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === 'number') sum += arr[i];
}
console.log(sum);

//Min and max

let min = arr[0],
  max = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (typeof arr[i] === 'number') {
    if (arr[i] < min) min = arr[i];
    if (arr[i] > max) max = arr[i];
  }
}
console.log(min, max);

//0.5 Christmas tree
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    console.log('#');
  }
  console.log('\n');
}
