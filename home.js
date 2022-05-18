cust = [
  {
    id: 1001,
    name: "Tejas Chaugle",
    phone: 1234569870,
    email: "example@example.com",
    address: "Some address",
    age: 18,
    connection: "domestic",
    units: 92,
  },
  {
    id: 1002,
    name: "Brnaby Klageman",
    phone: 2328524232,
    email: "bklageman0@xinhuanet.com",
    address: "29 Graceland Drive",
    age: 34,
    connection: "commercial",
    units: 25,
  },
  {
    id: 1003,
    name: "Daisy Hyndson",
    phone: 586670463,
    email: "dhyndson1@ox.ac.uk",
    address: "2 Knutson Terrace",
    age: 31,
    connection: "domestic",
    units: 110,
  },
  {
    id: 1004,
    name: "Maximilianus Kibbel",
    phone: 1164864306,
    email: "mkibbel2@archive.org",
    address: "1994 Tony Circle",
    age: 98,
    connection: "commercial",
    units: 220,
  },
  {
    id: 1005,
    name: "Charissa Aslet",
    phone: 6169080770,
    email: "caslet3@com.com",
    address: "7 American Avenue",
    age: 68,
    connection: "domestic",
    units: 244,
  },
  {
    id: 1006,
    name: "Curran Casarini",
    phone: 3748019932,
    email: "ccasarini4@networksolutions.com",
    address: "3 Lillian Trail",
    age: 33,
    connection: "commercial",
    units: 4,
  },
  {
    id: 1007,
    name: "Clareta Atack",
    phone: 5712078495,
    email: "catack5@comcast.net",
    address: "92 Ohio Drive",
    age: 34,
    connection: "domestic",
    units: 14,
  },
  {
    id: 1008,
    name: "Allyn Gillmore",
    phone: 2544155822,
    email: "agillmore6@umn.edu",
    address: "0851 Florence Lane",
    age: 19,
    connection: "commercial",
    units: 33,
  },
  {
    id: 1009,
    name: "Gweneth Whistlecraft",
    phone: 1511111822,
    email: "gwhistlecraft7@netscape.com",
    address: "1 Chinook Avenue",
    age: 33,
    connection: "domestic",
    units: 39,
  },
  {
    id: 1010,
    name: "Gawen Laible",
    phone: 2754444201,
    email: "glaible8@hc360.com",
    address: "81789 Barnett Alley",
    age: 45,
    connection: "commercial",
    units: 144,
  },
];

document.getElementById("logoutbtn").addEventListener("click", () => {
  localStorage.removeItem("pass");
  location.href = "index.html";
});

function showCard() {
  Array.from(document.getElementsByClassName("card")).forEach((element) => {
    element.style.display = "block";
  });
}

function hideCard() {
  Array.from(document.getElementsByClassName("card")).forEach((element) => {
    element.style.display = "none";
  });
}

document.getElementById("viewInfo").addEventListener("click", () => {
  hideCard();
  form = document.getElementById("form");
  form.innerHTML = ``
console.log(form);
showCard();
});
