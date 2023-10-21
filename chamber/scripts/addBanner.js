const bannerContainer = document.getElementById("hero-grid");
const bannerDiv = document.getElementById("banner");

const bannerBtn = document.getElementById("banner-close");

const today = new Date();
const dayOfWeek = today.getDay();

if (dayOfWeek === 1 || dayOfWeek === 2 || dayOfWeek === 6) {
  bannerDiv.classList.remove("hidden");
}

bannerBtn.addEventListener("click", () => {
  bannerDiv.classList.add("hidden");
});
