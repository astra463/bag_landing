export const fillCarousel = (
  cardData,
  carouselContainer,
  imageIndexes = null
) => {
  const splideList = carouselContainer.querySelector(".splide__list");
  const imagesToUse = imageIndexes
    ? imageIndexes.map((index) => cardData.images[index])
    : cardData.images;

  imagesToUse.forEach((img) => {
    const splideElement = document.createElement("li");
    splideElement.classList.add("splide__slide");
    const splideImage = document.createElement("img");
    splideImage.setAttribute("src", img);
    splideImage.setAttribute("alt", 'фотография сумки крупным планом на белом фоне');
    splideElement.appendChild(splideImage);
    splideList.appendChild(splideElement);
  });
};
