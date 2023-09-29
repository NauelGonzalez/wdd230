const msToDays = 84600000;
const visitsDisplay = document.querySelector("#welcome-message");

// 2️⃣ Get the stored VALUE for the numVisits-ls KEY in localStorage if it exists. If the numVisits KEY is missing, then assign 0 to the numVisits variable.
let lastVisit = Number(window.localStorage.getItem("lastVisit-ls")) || 0;
console.log(`todaysDate: ${lastVisit}`);
let todaysDate = Date.now();
console.log(`todaysDate: ${todaysDate}`);

// 3️⃣ Determine if this is the first visit or display the number of visits. We wrote this example backwards in order for you to think deeply about the logic.
if (lastVisit == 0) {
  visitsDisplay.textContent = `Welcome! Let us know if you have any questions.`;
} else if (todaysDate - lastVisit < 84600000) {
  visitsDisplay.textContent = `Back so soon! Awesome!`;
} else {
  visitsDisplay.textContent = `You last visited ${Math.floor(
    (todaysDate - lastVisit) / 84600000
  )} days ago`;
}

// 5️⃣ store the new visit total into localStorage, key=numVisits-ls
localStorage.setItem("lastVisit-ls", todaysDate);
