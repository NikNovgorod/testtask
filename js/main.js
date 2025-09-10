console.log("Hello");

const ulyana = document.querySelector(".ulyana");
const button1 = document.querySelector("#card-1");
const story1 = document.querySelector(".card-1");

button1.onclick = function () {
  ulyana.classList.toggle("hidden");
  story2.classList.toggle("hidden");
};

const regina = document.querySelector(".regina");
const button2 = document.querySelector("#card-2");
const story2 = document.querySelector(".card-2");

button2.onclick = function () {
  regina.classList.toggle("hidden");
  story1.classList.toggle("hidden");
};
