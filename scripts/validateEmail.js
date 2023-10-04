const pwd1 = document.querySelector("#pass");
const pwd2 = document.querySelector("#passCon");

pwd2.addEventListener("focusout", checkSame);

function checkSame() {
  if (pwd1.value !== pwd2.value) {
    pwd2.style.backgroundColor = "rgba(255, 240, 243, 0.9)";
    pwd2.style.color = "black";
    pwd2.value = "";
  } else {
    pwd2.style.backgroundColor = "rgba(204, 250, 210, 0.4)";
    pwd2.style.color = "var(--black)";
  }
}

const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("rating");

// RANGE event listener
range.addEventListener("change", displayRatingValue);
range.addEventListener("input", displayRatingValue);
console.log(range.value);
function displayRatingValue() {
  rangevalue.textContent = range.value;
}
