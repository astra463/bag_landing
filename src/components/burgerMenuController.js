// Функция для управления меню бургера
function burgerMenuController(burgerButton, burgerMenu) {
  // Добавляем обработчик клика на кнопку бургера
  burgerButton.addEventListener("click", toggleBurgerMenu);

  function toggleBurgerMenu() {
    burgerMenu.classList.toggle("header__menu--opened");
    burgerButton.classList.toggle("burger_button--opened");

    // Если меню открыто, добавляем обработчик клика на документ для закрытия меню при клике вне его области
    if (burgerMenu.classList.contains("header__menu--opened")) {
      document.addEventListener("click", closeBurgerMenuOutside);
    } else {
      // Если меню закрыто, удаляем обработчик клика на документ
      document.removeEventListener("click", closeBurgerMenuOutside);
    }
  }

  function closeBurgerMenuOutside(evt) {
    if (!burgerButton.contains(evt.target) && !burgerMenu.contains(evt.target)) {
      toggleBurgerMenu();
    }
  }
}

// Экспортируем функцию для использования в других файлах
export default burgerMenuController;
