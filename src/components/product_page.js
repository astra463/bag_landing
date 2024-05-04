import "../../src/index.css";
import "@splidejs/splide/css";
import { cardsData } from "./cards";
import { initSplide } from "../components/splideInitializer";
import burgerMenuController from "./burgerMenuController";

const burgerButton = document.querySelector(".burger_button");
const burgerMenu = document.querySelector(".header__menu");

burgerMenuController(burgerButton, burgerMenu);

let selectedColor = "черный"; // По умолчанию выбран черный цвет
let currentProduct = null;

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
	const productLink = document.querySelector(".product_page-button");

	const urlParams = new URLSearchParams(window.location.search);
	const productIndex = urlParams.get("productIndex");
	currentProduct = cardsData[productIndex];

	// Инициализация слайдера изображений
	initSplide(currentProduct, selectedColor);

	function fillProductInfo(product) {
		document.title = `Прочная и долговечная ${String(
			product.itemName
		).toLowerCase()} от 1900 рублей, премиум экокожа`;
		itemName.textContent = product.itemName;
		color.textContent = product.color;
		material.textContent = product.material;
		sizes.textContent = `${product.width} x ${product.height} x ${product.depth} см`;
		inside.textContent = product.inside;
		outside.textContent = product.outside;
		bottom.textContent = product.bottom;
		stripe.textContent = product.stripe;
		weight.textContent = product.weight * 1000;
		productLink.setAttribute("href", product.links.black);
	}

	// Заполняем информацию о товаре на странице
	fillProductInfo(currentProduct);

	// Обработчик события для кнопок выбора цвета
	const colorButtons = document.querySelectorAll(".select-color-btn");
	colorButtons.forEach((btn) => {
		btn.addEventListener("click", function (evt) {
			// Удаляем активный класс у всех кнопок
			colorButtons.forEach((button) => {
				button.classList.remove("active");
			});

			// Добавляем активный класс к нажатой кнопке
			evt.target.classList.add("active");

			// Получаем выбранный цвет из класса кнопки
			if (evt.target.classList.contains("brown")) {
				selectedColor = "коричневый";
				productLink.setAttribute("href", currentProduct.links.brown);
			} else if (evt.target.classList.contains("black")) {
				selectedColor = "черный";
				productLink.setAttribute("href", currentProduct.links.black);
			}

			// Изменяем изображения в слайдере в соответствии с выбранным цветом
			initSplide(currentProduct, selectedColor);
		});
	});
});
