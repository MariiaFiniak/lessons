
document.addEventListener("DOMContentLoaded", function () {
  const burger = document.querySelector(".education__burger")
  const menu = document.querySelector(".education__items")

  burger.addEventListener("click", function () {
    burger.classList.toggle("active")
    menu.classList.toggle("active")
  })
})