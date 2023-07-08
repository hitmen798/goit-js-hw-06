const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", function (event) {
  nameOutput.textContent = event.target.value.trim() || "Anonymous";
});