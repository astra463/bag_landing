import "../src/index.css";
import "@splidejs/splide/css";
import Splide from "@splidejs/splide";
import { cardsData } from "./components/cards.js";
import { createCard } from "./components/card.js";
import { swiper } from "./components/swiper.js";

const cardsContainer = document.querySelector(".places__list");
const splides = [];

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

const elms = document.getElementsByClassName("splide");

for (let i = 0; i < elms.length; i++) {
  const splide = new Splide(elms[i]);
  splide.mount();
  splides.push(splide);
  elms[i].addEventListener("click", handleClickEvent);
}

function handleClickEvent(e) {
  // Проверяем, является ли элемент, на который произошел клик, стрелкой слайдера
  if (e.target.closest(".splide__arrow")) {
    return;
  }

  if (e.target.closest(".cards-section__list-item")) {
    const productIndex = e.target.closest(".cards-section__list-item").dataset
      .productIndex;
    window.location.href = `product_page.html?productIndex=${productIndex}`;
  }
}

// Обработчик события для кнопок выбора цвета
const colorButtons = document.querySelectorAll(".select-color-btn");
colorButtons.forEach((btn) => {
  btn.addEventListener("click", function (evt) {
    colorButtons.forEach((button) => {
      button.classList.remove("active");
    });
    const card = evt.target.closest(".cards-section__list-item");
    if (card) {
      const splideElement = card.querySelector(".splide");
      const splideId = splideElement.id.match(/\d+/);
      if (splideElement) {
        if (evt.target.classList.contains("brown")) {
          if (splides.length > 0) {
            splides[splideId - 1].go(4);
          }
        } else if (evt.target.classList.contains("black")) {
          if (splides.length > 0) {
            splides[splideId - 1].go(0);
          }
        }
      }
    }
  });
});
