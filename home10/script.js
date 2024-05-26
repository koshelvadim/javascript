// HOMEWORK

// Задание 1
// Дан объект numbers. Необходимо в консоль вывести все значения больше или равные 3.

const numbers = {
  keyin1: 1,
  keyin2: 2,
  keyin3: 3,
  keyin4: 4,
  keyin5: 5,
  keyin6: 6,
  keyin7: 7,
};

function getElements(object, value) {
  for (const key in object) {
    if (object[key] >= value) {
      console.log(object[key]);
    }
  }
}

console.log('задание 1');
getElements(numbers, 3);

// Задание 2
// Необходимо из объекта, который лежит в константе post вывести значения, к которым приписан комментарий, в консоль.

const post = {
  author: "John", // вывести этот текст
  postId: 23,
  comments: [
    {
      userId: 10,
      userName: "Alex",
      text: "lorem ipsum",
      rating: {
        likes: 10,
        dislikes: 2, // вывести это число
      },
    },
    {
      userId: 5, // вывести это число
      userName: "Jane",
      text: "lorem ipsum 2", // вывести этот текст
      rating: {
        likes: 3,
        dislikes: 1,
      },
    },
  ],
};

console.log("задание 2");
console.log(post.author);
console.log(post.comments[0].rating.dislikes);
console.log(post.comments[1].userId);
console.log(post.comments[1].text);

// Задание 3
// Дан массив products, необходимо цену каждого продукта уменьшить на 15% используя метод forEach.

const products1 = [
  {
    id: 3,
    price: 200,
  },
  {
    id: 4,
    price: 900,
  },
  {
    id: 1,
    price: 1000,
  },
];

function saleProducts(products1, sale) {
  products1.forEach((el) => {
    el.price = (el.price * (100 - sale)) / 100;
  });
  return products1;
}

console.log("задание 3");
console.log(saleProducts(products1, 15));

// Задание 4
// 1. Необходимо вывести в консоль массив продуктов в котором есть хоть одна фотография используя метод filter. Исходные данные - массив products.
// 2. Необходимо отсортировать массив products используя метод sort по цене, начиная с самой маленькой, заканчивая самой большой ценой, после чего вывести отсортированный массив в консоль.

const products2 = [
  {
    id: 3,
    price: 127,
    photos: ["1.jpg", "2.jpg"],
  },
  {
    id: 5,
    price: 499,
    photos: [],
  },
  {
    id: 10,
    price: 26,
    photos: ["3.jpg"],
  },
  {
    id: 8,
    price: 78,
  },
];

const productFilter = products2.filter((el) => {
  if (el.photos && el.photos.length > 0) {
    return true;
  } else return false;
});

console.log("задание 4");
console.log(productFilter);

const productSort = products2.sort((a, b) => a.price - b.price);

console.log(productSort);

// **Задание 5**
// Дано 2 массива
const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = [
  "понедельник",
  "вторник",
  "среда",
  "четверг",
  "пятница",
  "суббота",
  "воскресенье",
];

// Вам необходимо объединить 2 этих массива, чтобы значения первого массива были ключами, а значения второго массива — значениями.

const object = {};

en.forEach((key,index) => {
  object[key] = ru[index]
});

console.log("задание 5*");
console.log(object);

// Данная промежуточная аттестация оценивается по системе "зачет" / "не зачет"
// "Зачет" ставится, если слушатель успешно выполнил
// "Незачет" ставится, если слушатель успешно выполнил

// Критерии оценивания:
// 1 - Слушатель создал консоль вывел все значения больше или равные 3.









// CLASSWORK

// const arr1 = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
// const arr2 = [1, 2, 3, 4, 5, 6, 7];

// const object = {};

// arr1.forEach((key,index) => {
//   object[key] = arr2[index]
// });

// console.log(object);

// const obj = {
//   x: 1,
//   y: 2,
//   z: 3
// }

// for (const key in obj) {
//     obj[key] **= 2;
// }

// console.log(obj);

// const obj = {
//   key1: {
//     key1: 1,
//     key2: 2,
//     key3: 3,
//   },
//   key2: {
//     key1: 4,
//     key2: 5,
//     key3: 6,
//   },
//   key3: {
//     key1: 7,
//     key2: 8,
//     key3: 9,
//   },
// };

// let sum = 0;
// for (const key in obj) {
//   const el = obj[key];
//   for (const key in el) {
//     const e = el[key];
//     sum += e;
//   }
// }
// console.log(sum);

// let sum1 = 0;
// const arr = Object.values(obj);
// arr.map((e) => {
//   const arr = Object.values(e);
//   arr.map((e) => {
//     sum1 += e;
//   })
// })

// console.log(sum1);

// const riddles = {
//   question: "Зимой и летом одним цветом?",
//   answer: "ёлка",
//   try: 1,
//   hint: ['зеленая', 'пушистая'],

//   askQuestion() {
//     const answerUser = prompt('Ваш ответ? ');
//     if (answerUser.toLowerCase() === this.answer) {
//       alert('Вы победили!');
//     } else {
//       if (this.try <= 2) {
//         alert(`Подсказка ${this.try}: ` + this.hint.pop());
//         this.try++;
//         this.askQuestion();
//       } else {
//         alert('Подсказки закончились\nВы проиграли');
//       }
//     }
//   },
// };

// riddles.askQuestion();