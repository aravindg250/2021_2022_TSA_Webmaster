const buttons = document.querySelectorAll(".card-buttons button");
const sections = document.querySelectorAll(".card-section");
const card = document.querySelector(".card");

const handleButtonClick = (e) => {
  const targetSection = e.target.getAttribute("data-section");
  const section = document.querySelector(targetSection);
  targetSection !== "#about"
    ? card.classList.add("is-active")
    : card.classList.remove("is-active");
  card.setAttribute("data-state", targetSection);
  sections.forEach((s) => s.classList.remove("is-active"));
  buttons.forEach((b) => b.classList.remove("is-active"));
  e.target.classList.add("is-active");
  section.classList.add("is-active");
};

buttons.forEach((btn) => {
  btn.addEventListener("click", handleButtonClick);
});

const buttons2 = document.querySelectorAll(".card2-buttons button");
const sections2 = document.querySelectorAll(".card2-section");
const card2 = document.querySelector(".card2");

const handleButtonClick2 = (e) => {
  const targetSection = e.target.getAttribute("data-section");
  const section = document.querySelector(targetSection);
  targetSection !== "#about2"
    ? card2.classList.add("is-active")
    : card2.classList.remove("is-active");
  card2.setAttribute("data-state", targetSection);
  sections2.forEach((s) => s.classList.remove("is-active"));
  buttons2.forEach((b) => b.classList.remove("is-active"));
  e.target.classList.add("is-active");
  section.classList.add("is-active");
};

buttons2.forEach((btn) => {
  btn.addEventListener("click", handleButtonClick2);
});

const buttons3 = document.querySelectorAll(".card3-buttons button");
const sections3 = document.querySelectorAll(".card3-section");
const card3 = document.querySelector(".card3");

const handleButtonClick3 = (e) => {
  const targetSection = e.target.getAttribute("data-section");
  const section = document.querySelector(targetSection);
  targetSection !== "#about3"
    ? card3.classList.add("is-active")
    : card3.classList.remove("is-active");
  card3.setAttribute("data-state", targetSection);
  sections3.forEach((s) => s.classList.remove("is-active"));
  buttons3.forEach((b) => b.classList.remove("is-active"));
  e.target.classList.add("is-active");
  section.classList.add("is-active");
};

buttons3.forEach((btn) => {
  btn.addEventListener("click", handleButtonClick3);
});

const buttons4 = document.querySelectorAll(".card4-buttons button");
const sections4 = document.querySelectorAll(".card4-section");
const card4 = document.querySelector(".card4");

const handleButtonClick4 = (e) => {
  const targetSection = e.target.getAttribute("data-section");
  const section = document.querySelector(targetSection);
  targetSection !== "#about4"
    ? card4.classList.add("is-active")
    : card4.classList.remove("is-active");
  card4.setAttribute("data-state", targetSection);
  sections4.forEach((s) => s.classList.remove("is-active"));
  buttons4.forEach((b) => b.classList.remove("is-active"));
  e.target.classList.add("is-active");
  section.classList.add("is-active");
};

buttons4.forEach((btn) => {
  btn.addEventListener("click", handleButtonClick4);
});

const buttons5 = document.querySelectorAll(".card5-buttons button");
const sections5 = document.querySelectorAll(".card5-section");
const card5 = document.querySelector(".card5");

const handleButtonClick5 = (e) => {
  const targetSection = e.target.getAttribute("data-section");
  const section = document.querySelector(targetSection);
  targetSection !== "#about5"
    ? card5.classList.add("is-active")
    : card5.classList.remove("is-active");
  card5.setAttribute("data-state", targetSection);
  sections5.forEach((s) => s.classList.remove("is-active"));
  buttons5.forEach((b) => b.classList.remove("is-active"));
  e.target.classList.add("is-active");
  section.classList.add("is-active");
};

buttons5.forEach((btn) => {
  btn.addEventListener("click", handleButtonClick5);
});


const buttons6 = document.querySelectorAll(".card6-buttons button");
const sections6 = document.querySelectorAll(".card6-section");
const card6 = document.querySelector(".card6");

const handleButtonClick6 = (e) => {
  const targetSection = e.target.getAttribute("data-section");
  const section = document.querySelector(targetSection);
  targetSection !== "#about6"
    ? card6.classList.add("is-active")
    : card6.classList.remove("is-active");
  card6.setAttribute("data-state", targetSection);
  sections6.forEach((s) => s.classList.remove("is-active"));
  buttons6.forEach((b) => b.classList.remove("is-active"));
  e.target.classList.add("is-active");
  section.classList.add("is-active");
};

buttons6.forEach((btn) => {
  btn.addEventListener("click", handleButtonClick6);
});

const buttons7 = document.querySelectorAll(".card7-buttons button");
const sections7 = document.querySelectorAll(".card7-section");
const card7 = document.querySelector(".card7");

const handleButtonClick7 = (e) => {
  const targetSection = e.target.getAttribute("data-section");
  const section = document.querySelector(targetSection);
  targetSection !== "#about7"
    ? card7.classList.add("is-active")
    : card7.classList.remove("is-active");
  card7.setAttribute("data-state", targetSection);
  sections7.forEach((s) => s.classList.remove("is-active"));
  buttons7.forEach((b) => b.classList.remove("is-active"));
  e.target.classList.add("is-active");
  section.classList.add("is-active");
};

buttons7.forEach((btn) => {
  btn.addEventListener("click", handleButtonClick7);
});
