export const fillCarousel = (
	cardData,
	carouselContainer,
	selectedColor = null
) => {
	const splideList = carouselContainer.querySelector(".splide__list");
	const blackImages = cardData.images.filter((img) => img.includes("black"));
	const brownImages = cardData.images.filter((img) => img.includes("brown"));

	// Выбираем массив изображений в зависимости от выбранного цвета
	const imagesToUse =
		selectedColor === "черный"
			? blackImages
			: selectedColor === "коричневый"
			? brownImages
			: cardData.images; // Если цвет не выбран, используем все изображения

	// Очищаем слайдер перед заполнением новыми изображениями
	splideList.innerHTML = "";

	// Добавляем изображения в слайдер
	imagesToUse.forEach((img) => {
		const splideElement = document.createElement("li");
		splideElement.classList.add("splide__slide");
		const splideImage = document.createElement("img");
		splideImage.setAttribute("src", img);
		splideImage.setAttribute(
			"alt",
			"фотография сумки крупным планом на белом фоне"
		);
		splideElement.appendChild(splideImage);
		splideList.appendChild(splideElement);
	});
};

export const fillCarouselWithFirstFour = (
  cardData,
  carouselContainer
) => {
  const splideList = carouselContainer.querySelector(".splide__list");
  const blackImages = cardData.images.filter((img) => img.includes("black"));
  const brownImages = cardData.images.filter((img) => img.includes("brown"));

  const imagesToUse = [
    ...blackImages.slice(0, 4), // первые четыре черные фото
    ...brownImages.slice(0, 4) // первые четыре коричневые фото
  ];

  splideList.innerHTML = "";

  imagesToUse.forEach((img) => {
    const splideElement = document.createElement("li");
    splideElement.classList.add("splide__slide");
    const splideImage = document.createElement("img");
    splideImage.setAttribute("src", img);
    splideImage.setAttribute(
      "alt",
      "фотография сумки крупным планом на белом фоне"
    );
    splideElement.appendChild(splideImage);
    splideList.appendChild(splideElement);
  });
};
