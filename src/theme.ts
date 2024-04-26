const themeElement = document.getElementById("btn-theme");
const bodyElement = document.body;

themeElement?.addEventListener("click", () => {
    bodyElement.classList.toggle("dark");
});
