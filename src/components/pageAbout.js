import "../../src/index.css";
import burgerMenuController from "./burgerMenuController";

const burgerButton = document.querySelector(".burger_button");
const burgerMenu = document.querySelector(".header__menu");

burgerMenuController(burgerButton, burgerMenu);

document.querySelectorAll(".return details").forEach((item) => {
  item.addEventListener("toggle", (event) => {
    if (event.target.open) {
      document.querySelectorAll(".return details").forEach((otherItem) => {
        if (otherItem !== event.target) {
          otherItem.removeAttribute("open");
        }
      });
    }
  });

});