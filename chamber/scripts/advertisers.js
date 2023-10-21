const baseURL = "https://nauelgonzalez.github.io/wdd230/";
const membersURL =
  "https://nauelgonzalez.github.io/wdd230/chamber/data/members.json";

const container = document.getElementById("info-box");
//Funca
async function getLinks() {
  const response = await fetch(membersURL);
  const data = await response.json();
  const filteredData = [];
  data.members.forEach((member) => {
    if (
      member.membership_level == "Silver" ||
      member.membership_level == "Gold"
    ) {
      filteredData.push(member);
    }
    while (filteredData.length > 3) {
      const randomIndex = Math.floor(Math.random() * filteredData.length);
      filteredData.splice(randomIndex, 1);
    }
  });
  displayLinks(filteredData);
}

function displayLinks(members) {
  members.forEach((member) => {
    let section = document.createElement("section");
    section.setAttribute("class", "member-card");

    let divCompany = document.createElement("div");
    divCompany.setAttribute("class", "company-name");
    divCompany.innerHTML = member.company_name;

    let divContact = document.createElement("div");
    divContact.setAttribute("class", "contact-info");
    divContact.innerHTML =
      "Address: " +
      member.address +
      "<br><br>" +
      "Phone: " +
      member.phone +
      "<br><br>website: " +
      "<a href='" +
      member.website +
      "'>" +
      member.website +
      "</a>";

    let divSlogan = document.createElement("div");
    divSlogan.setAttribute("class", "slogan");
    divSlogan.innerHTML = member.slogan;

    section.appendChild(divCompany);
    section.appendChild(divContact);
    section.appendChild(divSlogan);
    container.appendChild(section);
  });
}

/*
  <section class="member-card">
                <div class="company-name">Red Rock Mining Co.</div>
                <div class="contact-info">
                    Email: info@redrockminingco.com<br>
                    Phone: (555) 123-4567<br>
                    Website: <a href="https://www.redrockminingco.com" target="_blank">www.redrockminingco.com</a>
                </div>
                <div class="slogan">"Mining Excellence Beneath Every Rock"</div>
    </section>

*/

getLinks();
