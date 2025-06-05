
// document.addEventListener("DOMContentLoaded", function () {
//   const burger = document.querySelector(".header__burger")
//   const menu = document.querySelector(".header__items")

//   burger.addEventListener("click", function () {
//     burger.classList.toggle("active")
//     menu.classList.toggle("active")
//   })
// })
document.addEventListener("DOMContentLoaded", function () {
  const burger = document.querySelector(".header__burger")
  const menu = document.querySelector(".header__menu")
  const menuLinks = document.querySelectorAll(".header__item")

  // Відкриття/закриття по кліку на бургер
  burger.addEventListener("click", function () {
    burger.classList.toggle("active")
    menu.classList.toggle("active")
  })

  // Закриття при кліку на пункт меню
  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      burger.classList.remove("active")
      menu.classList.remove("active")
    })
  })

  // Закриття при кліку поза меню і бургера
  document.addEventListener("click", (e) => {
    const isClickInsideMenu = menu.contains(e.target)
    const isClickOnBurger = burger.contains(e.target)
    if (
      !isClickInsideMenu &&
      !isClickOnBurger &&
      menu.classList.contains("active")
    ) {
      burger.classList.remove("active")
      menu.classList.remove("active")
    }
  })
})