const switchButton = document.querySelector(".switch");
const root = document.querySelector("html");

switchButton.addEventListener("click", function () {
  this.classList.toggle("active");

  if (root.dataset.theme === "light") {
    root.dataset.theme = "dark";
  } else {
    root.dataset.theme = "light";
  }
});
