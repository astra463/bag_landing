import { fillCarouselWithFirstFour } from "./modules.js";

let currentIndex = 0;

const createCard = (cardData) => {
  const cardElement = getCardTemplate();

  const cardParameters = cardElement.querySelector(".card__parameters");
  const cardCategory = cardElement.querySelector(".card__category");

  fillCarouselWithFirstFour(cardData, cardElement);

  cardElement.dataset.category = cardData.category;
  cardElement.dataset.productIndex = currentIndex++;
  cardParameters.querySelector(".width").textContent = cardData.width;
  cardParameters.querySelector(".height").textContent = cardData.height;
  cardParameters.querySelector(".depth").textContent = cardData.depth;
  cardParameters.querySelector(".weight").textContent = cardData.weight;
  cardParameters.querySelector(".capacity").textContent = cardData.capacity;
  cardCategory.textContent = cardData.itemName;

  return cardElement;
};

const getCardTemplate = () => {
  return document
    .querySelector("#card-template")
    .content.querySelector(".places__item")
    .cloneNode(true);
};

export { createCard };
