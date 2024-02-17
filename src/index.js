import "../src/index.css"; // добавьте импорт главного файла стилей

import { cardsData } from "./components/cards.js";
import { createCard } from "./components/card.js";

const cardsContainer = document.querySelector(".places__list");

cardsData.forEach((card) => {
  cardsContainer.append(createCard(card));
});

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    let windowBottom = window.pageYOffset + window.innerHeight;

    let sectionTitles = document.querySelectorAll(".page__section-title");
    sectionTitles.forEach(function (title) {
      let objectBottom = title.offsetTop + title.offsetHeight;

      if (objectBottom < windowBottom) {
        title.classList.add("animate-underline");
      }
    });

    let ratingButtons = document.querySelectorAll(".section__rating-button");
    ratingButtons.forEach(function (button) {
      let objectBottom = button.offsetTop + button.offsetHeight;

      if (objectBottom < windowBottom) {
        button.classList.add("animate-rating-button");
      }
    });

    let buttons = document.querySelectorAll(".button");
    buttons.forEach(function (button) {
      let objectBottom = button.offsetTop + button.offsetHeight;

      if (objectBottom < windowBottom) {
        button.classList.add("animate-button");
      }
    });
  });

  window.dispatchEvent(new Event("scroll")); // Запускаем обработчик событий скролла сразу после загрузки страницы
});

document.querySelectorAll(".faq details").forEach((item) => {
  item.addEventListener("toggle", (event) => {
    if (event.target.open) {
      document.querySelectorAll(".faq details").forEach((otherItem) => {
        if (otherItem !== event.target) {
          otherItem.removeAttribute("open");
        }
      });
    }
  });
});


