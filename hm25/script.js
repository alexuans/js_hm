// 1. Напишіть функцію, яка буде перевіряти обʼєкт на пустоту
const obj1 = {
  a: 1,
};
const obj2 = {};

function isObjectEmpty(obj) {
  return Object.keys(obj).length === 0;
}

console.log(isObjectEmpty(obj2));

// 2. Опишіть обʼєкт user з полями name, age та методом sayHello, результатом виклику якого має бути повідомлення “Привіт, я name, мені age років”

const person = {
  name: 'Олексій',
  age: '32',
  sayHello() {
    return `Привіт, я ${this.name}, мені ${this.age} роки.`;
  },
};
console.log(person.sayHello());

// 3. Напишіть обʼєкт калькулятор. Він має містити метод ask, sum та mul. При виклику методу ask обʼєкт має запросити 2 числа та зберегти їх, як свої властивості. При виклику sum - вивести суму збережених чисел, при виклику mul - додаток чисел.
let calc = {
  number1: undefined,
  number2: undefined,
  ask() {
    this.number1 = +prompt('Enter first number');
    this.number2 = +prompt('Enter second number');
  },
  sum() {
    return this.number1 + this.number2;
  },
  mult() {
    return this.number1 * this.number2;
  },
};
calc.ask();
