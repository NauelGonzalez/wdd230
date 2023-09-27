const lastModified = new Date(document.lastModified);
const format = {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",

  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
};

document.getElementById("lastModified").textContent =
  "Lazy Load testpage - Last modification: " +
  lastModified.toLocaleString("en-US", format);
