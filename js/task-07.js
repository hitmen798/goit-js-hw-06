const fontSizeControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

fontSizeControl.addEventListener("input", function () {
  text.style.fontSize = `${fontSizeControl.value}px`;
});