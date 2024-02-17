const createCard = (cardData) => {
  const cardElement = getCardTemplate();

  const cardImage = cardElement.querySelector('.card__picture');
  const cardItemNumber = cardElement.querySelector('.card__item-number');
  const cardDescription = cardElement.querySelector('.card__item-description');
  const cardCategory = cardElement.querySelector('.card__category');

  cardImage.src = cardData.itemImage;
  cardItemNumber.textContent = `Артикул: ${cardData.itemId}`;
  cardDescription.textContent = cardData.itemDescription;
  cardCategory.textContent = cardData.itemName;

  return cardElement;
};

const getCardTemplate = () => {
  return document
    .querySelector("#card-template")
    .content.querySelector(".places__item")
    .cloneNode(true);
};

export { createCard }

