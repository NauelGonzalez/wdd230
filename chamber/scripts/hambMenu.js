const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
  navigation.classList.toggle("navigation");
  hamButton.classList.toggle("open");
});

const darkMode = document.querySelector("#dark-mode");
const btnImg = darkMode.querySelector("img");

let dark = false;

darkMode.addEventListener("click", () => {
  if (dark) {
    btnImg.src = "images/dark.png";
  } else {
    btnImg.src = "images/light-inversed.png";
  }
  dark = !dark;
  document.body.classList.toggle("dark-theme");
});
