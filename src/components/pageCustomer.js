import "../../src/index.css";
import burgerMenuController from "./burgerMenuController.js";

const burgerButton = document.querySelector(".burger_button");
const burgerMenu = document.querySelector(".header__menu");

burgerMenuController(burgerButton, burgerMenu);