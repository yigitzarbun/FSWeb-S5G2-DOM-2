import "./less/index.less";

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
// document.querySelector("h1").addEventListener("click",function(e){
// alert("Bana tıkladın!")
// });

// Kodlar buraya gelecek!

// selectors
const logo = document.querySelector("h1");
const body = document.querySelector("body");
const contact = document.querySelectorAll(".nav-link")[3];
const img = document.getElementsByTagName("img");
const heroImg = document.querySelector("img");
const button = document.querySelectorAll(".btn");
const contentSection = document.querySelector(".content-section");
const header = document.querySelector(".main-navigation");
const welcome = document.querySelector("input");
const homepageLink = document.querySelector("nav a");
// events

// Event 1: Each time mouse hovers through the logo, the logo's color shall change
logo.addEventListener("mouseover", () => {
  const colors = ["#579BB1", "#FFB100", "#3C6255", "#243763", "#FD8A8A"];
  function generateRandomNumber(number) {
    return Math.floor(Math.random() * number);
  }
  logo.style.color = colors[generateRandomNumber(colors.length)];
});

//Event 2: Each time user presses a key, the background color of the entire page shall change
body.addEventListener("keydown", (x) => {
  if (x.code == "ArrowLeft") {
    const colors = ["#82AAE3", "#91D8E4", "#BFEAF5", "#EAFDFC"];
    function generateRandomNumber(number) {
      return Math.floor(Math.random() * number);
    }
    body.style.backgroundColor = colors[generateRandomNumber(colors.length)];
  }
});

//Event 3: Each time user scrolls up or down, "iletişim" font-size grows
body.addEventListener("wheel", () => {
  contact.style.fontSize = "2rem";
  contact.style.fontWeight = "bolder";
  contact.style.color = "blue";
  contact.textContent = "Hemen Ara !!!";
});

//Event 4: When the page fully downloads, a promotion alert will appear
window.addEventListener("load", () => {
  alert("Sana özel hazırlanan fırsatları öğrenmek için hemen iletişime geç!");
  contact.style.fontSize = "2rem";
  contact.style.fontWeight = "bolder";
  contact.style.color = "blue";
  contact.textContent = "Hadi Ara!!!";
});

//Event 5: When user clicks on "İletişim", a phone number appears
contact.addEventListener("click", () => {
  contact.textContent = "+90-533-243-33-43";
  contact.style.fontSize = "1.5rem";
});

//Event 6: When user resizes the screen, background changes to black and a new div appears
window.addEventListener("resize", () => {
  body.style.backgroundColor = "black";
  img[0].style.display = "none";
  img[1].style.display = "none";
  img[2].style.display = "none";
  img[3].style.display = "none";
  button[0].style.display = "none";
  button[1].style.display = "none";
  button[2].style.display = "none";
  const banner = document.createElement("div");
  banner.style.height = "200px";
  banner.style.width = "200px";
  banner.textContent = "selam";
  banner.style.backgroundColor = "yellow";
  banner.textContent = "E hadi... aramadın hala";
  banner.style.fontSize = "4rem";
  contentSection.appendChild(banner);
});

//Event 7: When user scrolls, header color will smoothly change to yellow
// (color transition başarısız!!!)

window.addEventListener("scroll", () => {
  header.style.backgroundColor = "yellow";
  header.style.transition = "backgroundColor 3s linear";
});

header.addEventListener("dblclick", (event) => {
  event.target.style.backgroundColor = "white";
});

//Event 8: When user selects the welcome text, its background color shall change
welcome.addEventListener("select", (event) => {
  event.target.style.backgroundColor = "red";
});

//Event 9: When user double clicks on the logo, an alert will appear
logo.addEventListener("dblclick", () => {
  alert("buraya çift tıklamak sana hiçbirşey kazandırmaz. sen iyisi bizi ara");
});

//Event 10 a: "Beni de Al!" butonuna tıklandığında "Sepete Eklendi" alert belirecek
button[0].addEventListener("click", () => {
  alert("Sepete Eklendi");
});

button[1].addEventListener("click", () => {
  alert("Sepete Eklendi");
});

button[2].addEventListener("click", () => {
  alert("Sepete Eklendi");
});

//Event 10 b:
button.forEach((item) => {
  item.addEventListener("click", (event) => {
    event.target.style.backgroundColor = "green";
  });
});

//Event 11: ilk resime çift tıklandığında resim siyah-beyaz olacak
heroImg.addEventListener("dblclick", (event) => {
  event.target.style.filter = "grayscale(100%)";
});

// prevent default
homepageLink.addEventListener("click", function (event) {
  event.preventDefault();
});
