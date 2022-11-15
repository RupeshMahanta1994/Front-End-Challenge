const navbarItems = document.querySelector(".navBar-items");
const menuBtn = document.querySelector(".menu-btn");


menuBtn.addEventListener("click", function () {
    navbarItems.classList.toggle("active");
});