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
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    let p3 = document.createElement("p");
    let a = document.createElement("a");

    // "address": "101 Red Planet Street, Mars City",
    // "phone": "+1234567890",
    // "website": "http://www.marstechsolutions.com",
    // "image": "https://nauelgonzalez.github.io/wdd230/chamber/images/marstech.webp",
    // "membership_level": "Gold",

    img.setAttribute("src", member.image);
    img.setAttribute("load", "lazy");
    h3.innerText = member.company_name;
    a.innerHTML = member.company_name;
    a.setAttribute("href", member.website);
    a.setAttribute("class", "weblink");
    p1.innerHTML = `<b>Membership:</b> ${member.membership_level} <b>`;
    p2.innerHTML = `<b>Phone:</b> ${member.phone}`;
    p3.innerHTML = `<b>Address:</b> ${member.address} `;
    p3.setAttribute = ("id", "address");
    section.appendChild(img);
    section.appendChild(a);
    section.appendChild(p1);
    section.appendChild(p2);
    section.appendChild(p3);
    container.appendChild(section);
    //li.innerHTML = `${week.week}: `;
  });
}

getLinks();

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.getElementById("directory-container");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
  // example using arrow function
  display.classList.add("grid");
  display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
  display.classList.add("list");
  display.classList.remove("grid");
}
