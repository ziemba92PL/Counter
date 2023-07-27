const btnDecrease = document.getElementById("btn-decrease");
const btnReset = document.getElementById("btn-reset");
const btnIncrease = document.getElementById("btn-increase");
const showNumber = document.getElementById("number");
const btnStatus = document.querySelectorAll("button");

btnDecrease.addEventListener("click", () => {
  showNumber.textContent--;
  changeColor();
});

btnReset.addEventListener("click", () => {
  showNumber.textContent = 0;
  changeColor();
});

btnIncrease.addEventListener("click", () => {
  showNumber.textContent++;
  changeColor();
});

function changeColor() {
  console.log("dupa");
  if (+showNumber.textContent > 0) {
    showNumber.style.color = "green";
  }
  if (+showNumber.textContent < 0) {
    showNumber.style.color = "red";
  }
  if (+showNumber.textContent == 0) {
    showNumber.style.color = "inherit";
  }
}
