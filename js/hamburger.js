const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("ahead");

hamburger.addEventListener("click", () => {
    menu.classList.toggle("show");
});