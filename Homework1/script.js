// 1) Первое задание:

function convert() {
  const number = +prompt('Введите число:');
  const system = +prompt('Введите систему счисления:');

  if (Number.isFinite(number) && Number.isFinite(system)) {
    const result = number.toString(system);

    console.log(result);
  } else {
    console.error('Некорректный ввод!');
  }
}

convert();

// 2) Второе задание:

function calc() {
  const firstNumber = +prompt('Введите первое число:');
  if (Number.isNaN(firstNumber)) {
    return console.error('Некорректный ввод!');
  }
  const secondNumber = +prompt('Введите второе число:');
  if (Number.isNaN(secondNumber)) {
    return console.error('Некорректный ввод!');
  }

  console.log(`Ответ: ${firstNumber + secondNumber}, ${firstNumber / secondNumber}`);
}

calc();
