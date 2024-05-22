// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число

// for (let i = 0; i <= 11; i++) {
//     if(i === 0) {
//         console.log(`${i} - это ноль`);
//     } else if (i % 2 !==0) {
//         console.log(`${i} - нечетное число`);
//     } else console.log(`${i} - четное число`);
// }

// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]

// const array = [1, 2, 3, 4, 5, 6, 7];

// for (let i = 0; i < array.length; i++) {
//     if (i === 3) {
//         array.splice(i, 2);
//     }
// }

// console.log(array);

// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3

function getRandomArray(num) {
  const array = [];
  for (let i = 0; i < num; i++) {
    let res = array.push(Math.floor(Math.random() * (9 - 0) + 0)); //Math.floor(Math.random() * (max - min)) + min
  }
  return array;
}

const array = getRandomArray(5);
console.log(array);

const sumElArray = array.reduce((acc, el) => acc + el);
console.log(sumElArray);

function minElArray(array) {
  let min = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
  }
  return min;
}

console.log(minElArray(array));

function findElArray(array, findEl) {
  for (let i = 0; i < array.length; i++) {
    if (findEl === array[i]) {
      return 1;
    }
  }
  return 0;
}

let res = findElArray(array, 3);

if(res === 1) console.log('число есть');
else console.log('числа нет');


// *Необязательное задание. *
// Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:

// x
// xx
// xxx
// xxxx
// xxxxx

let str = "x";
for (let i = 0; i < 20; i++) {
  console.log(str + '\n');
  str += "x"
}
