const baseURL = "https://nauelgonzalez.github.io/wdd230/";
const membersURL =
  "https://nauelgonzalez.github.io/wdd230/chamber/data/members.json";

const container = document.getElementById("directory-container");

async function getLinks() {
  const response = await fetch(membersURL);
  const data = await response.json();
  displayLinks(data.members);
}

function displayLinks(members) {
  members.forEach((member) => {
    let section = document.createElement("section");
    let img = document.createElement("img");
    let h3 = document.createElement("h3");
    let p = document.createElement("p");
    let a = document.createElement("a");

    img.setAttribute("src", "images/" + member.image);
    h3.innerText = member.company_name;
    section.appendChild(img);
    section.appendChild(h3);
    container.appendChild(section);
    //li.innerHTML = `${week.week}: `;
  });
}

getLinks();
