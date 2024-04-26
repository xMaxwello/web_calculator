"use strict";
const themeElement = document.getElementById("btn-theme");
const bodyElement = document.body;
themeElement === null || themeElement === void 0 ? void 0 : themeElement.addEventListener("click", () => {
    bodyElement.classList.toggle("dark");
});
