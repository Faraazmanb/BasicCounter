const decrementButton = document.getElementById("decrementButton");
const incrementButton = document.getElementById("incrementButton");
const Reset = document.getElementById("Reset");

const countLabel = document.getElementById("countLabel");
let count = 0;

incrementButton.onclick = function () {
  count++;
  countLabel.textContent = count;
};

decrementButton.onclick = function () {
  count--;
  countLabel.textContent = count;
};
Reset.onclick = function () {
  count = 0;
  countLabel.textContent = count;
};
