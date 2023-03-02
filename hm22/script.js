// 1. Ввести перевірку на 0 при ділені. Якщо друге число нуль – виводити повідомлення про помилку замість результату ділення.

// 2. Якщо перше число меньше другого показувати повідомлення “Ви впевнені, що хочете продовжити операцію?”. Після підтвердження – показати результат. віднімання, в противному випадку пропустити повідомлення з показом результату

// 3. Якщо одне з полів пусте – показати помилку і не виконувати подальші операції.

// 4. Додайте посилання на репозиторій в особистий кабінет.

let num1 = prompt('Enter first number:', '');
let num2 = prompt('Enter second number:', '');

console.log(num1, num2);

if (num1 === '' || num2 === '' || num2 === '0') {
  alert('Помилка!');
} else {
  if (+num1 < +num2) {
    if (confirm('Ви впевнені, що хочете продовжити операцію')) {
      alert(
        `Sum = ${Number(num1) + Number(num2)},Difference = ${
          Number(num1) - Number(num2)
        },Multiplication = ${Number(num1) * Number(num2)},Division = ${
          Number(num1) / Number(num2)
        }.`
      );
    } else {
      alert(
        `Sum = ${Number(num1) + Number(num2)},Multiplication = ${
          Number(num1) * Number(num2)
        },Division = ${Number(num1) / Number(num2)}.`
      );
    }
  } else {
    alert(
      `Sum = ${Number(num1) + Number(num2)},Difference = ${
        Number(num1) - Number(num2)
      },Multiplication = ${Number(num1) * Number(num2)},Division = ${
        Number(num1) / Number(num2)
      }.`
    );
  }
}
