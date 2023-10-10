const baseURL = "https://nauelgonzalez.github.io/wdd230/";
const linksURL = "https://nauelgonzalez.github.io/wdd230/data/links.json";

const ul = document.getElementById("links");

async function getLinks() {
  const response = await fetch(linksURL);
  const data = await response.json();
  displayLinks(data.weeks);
}

function displayLinks(weeks) {
  weeks.forEach((week) => {
    let li = document.createElement("li");
    li.innerHTML = `${week.week}: `;
    week.links.forEach((link) => {
      let a = document.createElement("a");
      a.setAttribute("href", link.url);
      a.innerText = link.title + " | ";
      li.append(a);
    });
    ul.appendChild(li);
  });
}

getLinks();
