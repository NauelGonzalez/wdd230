document.getElementById("date").textContent =
  "© " +
  new Date().getFullYear() +
  " | Nauel Gonzalez | Contact: contact@mcc.mars";

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
  "Last modification: " + lastModified.toLocaleString("en-US", format);
