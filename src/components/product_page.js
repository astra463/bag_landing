import "../../src/index.css";
import Splide from "@splidejs/splide";
import "@splidejs/splide/css";
import { cardsData } from "./cards";
import { fillCarousel } from "./modules";

const splides = [];


document.addEventListener("DOMContentLoaded", function () {

  const itemName = document.querySelector(".product-specifications");
  const table = document.querySelector(".table");
  const color = table.querySelector(".parameter-color-value");
  const material = table.querySelector(".parameter-material-value");
  const sizes = table.querySelector(".parameter-size-value");
  const inside = table.querySelector(".parameter-inside-value");
  const outside = table.querySelector(".parameter-outside-value");
  const bottom = table.querySelector(".parameter-bottom-value");
  const stripe = table.querySelector(".parameter-stripe-value");
  const weight = table.querySelector(".parameter-weight-value");

  const urlParams = new URLSearchParams(window.location.search);
  const product = cardsData[urlParams.get("productIndex")];

  fillCarousel(product, document.querySelector(".page-product-content"));

  const elms = document.getElementsByClassName("splide");
  for (let i = 0; i < elms.length; i++) {
    const splide = new Splide(elms[i]);
    splide.mount();
    splides.push(splide);
  }

  function fillProductInfo(product) {
    document.title = product.itemName;
    itemName.textContent = product.itemName;
    color.textContent = product.color;
    material.textContent = product.material;
    sizes.textContent = `${product.width} x ${product.height} x ${product.depth} см`;
    inside.textContent = product.inside;
    outside.textContent = product.outside;
    bottom.textContent = product.bottom;
    stripe.textContent = product.stripe;
    weight.textContent = product.weight * 1000;
  }

  // Заполняем информацию о товаре на странице
  fillProductInfo(product);
});

// Обработчик события для кнопок выбора цвета
const colorButtons = document.querySelectorAll(".select-color-btn");
colorButtons.forEach((btn) => {
  btn.addEventListener("click", function (evt) {
    colorButtons.forEach((button) => {
      button.classList.remove("active");
    });

    evt.target.classList.add("active");

    if (evt.target.classList.contains("brown")) {
      if (splides.length > 0) {
        splides[0].go(14);
      }
    } else if (evt.target.classList.contains("black")) {
      if (splides.length > 0) {
        splides[0].go(0);
      }
    }
  });
});
