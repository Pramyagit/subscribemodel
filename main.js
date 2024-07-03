const body = document.querySelector("body");
body.style.background = "lightGreen";
body.style.display = "flex";
body.style.flexDirection = "column";
body.style.textWrap = "wrap";

//head h2
const header = document.querySelector(".head h2");
header.style.backgroundColor = "green";
header.style.color = "White";
header.style.display = "flex";
header.style.justifyContent = "center";
console.log(header);
//nav
const navbar = document.querySelector(".nav");
navbar.style.width = "100vw";
navbar.style.height = "200px";
navbar.style.display = "flex";
navbar.style.justifyContent = "center";
navbar.style.alignItem = "center";
const nav = document.querySelector(".nav button");
console.log(nav);
nav.style.color = "White";
nav.style.textAlign = "center";
nav.style.margin = "50px";
nav.style.width = "100px";
nav.style.height = "50px";
nav.style.fontSize = "24px";
nav.style.backgroundColor = "Red";
nav.style.borderRadius = "10px";
// main
const container = document.querySelector(".container");
console.log(container);
container.style.width = "100vw";
container.style.height = "200px";
container.style.flexDirection = "row";
container.style.gap = "10px";
container.style.display = "none";
container.style.justifyContent = "center";
// button
const containerBtn = document.querySelector(".container .btn");
containerBtn.style.borderRadius = "10px";
containerBtn.style.width = "100px";
containerBtn.style.height = "30px";
containerBtn.style.color = "white";
const sub = containerBtn.nextElementSibling;
sub.style.borderRadius = "10px";
sub.style.width = "100px";
sub.style.height = "30px";
sub.style.fontSize = "19px";
const bell = sub.nextElementSibling;
bell.style.color = "white";
bell.style.width = "100px";
bell.style.height = "30px";
bell.style.borderRadius = "10px";
nav.addEventListener("click", view, false);
function view(e) {
  const con = document.querySelector(".container");
  if (con.style.display === "none") {
    container.style.display = "flex";
  } else {
    container.style.display = "none";
  }
  const myShow = e.target.textContent;
  console.log(e.target.textContent);
  myShow === "Show"
    ? (e.target.textContent = "Close")
    : (e.target.textContent = "Show");
}
// buttons click event
containerBtn.addEventListener("click", like, false);
function like() {
  ionicIcon.classList.toggle("add");
}
//
sub.addEventListener("click", subscribes);
function subscribes(e) {
  sub.classList.toggle("subscribe");
  const myText = e.target.textContent;
  console.log(myText);
  myText === "Subscribe"
    ? (e.target.textContent = "Subscribed")
    : (e.target.textContent = "Subscribe");
}
//
bell.addEventListener("click", alert, false);
function alert() {
  bellIcon.classList.toggle("add");
}
// icon
const ionicIcon = containerBtn.firstElementChild;
ionicIcon.style.width = "20px";
ionicIcon.style.height = "20px";
const bellIcon = bell.firstElementChild;
bellIcon.style.width = "20px";
bellIcon.style.height = "20px";
