import React from 'react';

// вместо хранилища делаем запрос на бэкэнд для получения данных.
const basket = [
  {
    name: "Пицца Пепперони на тон...",
    description: "Пепперони, моцарелла, том...",
    preview: "../img/pizza.png",
    counter: 1
  },
  {
    name: "Пицца Петровская на тон...",
    description: "Пепперони, моцарелла, том...",
    preview: "../img/pizza.png",
    counter: 1
  },
  {
    name: "Пицца Мясная на тонком...",
    description: "Пепперони, моцарелла, том...",
    preview: "../img/pizza.png",
    counter: 1
  }
];

const basketProgress = 37
;

export default {
  basket,
  basketProgress
};