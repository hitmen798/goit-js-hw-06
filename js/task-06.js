const validationInput = document.querySelector("#validation-input");

validationInput.addEventListener("blur", function () {
  const isValid =
    validationInput.value.length ===
    parseInt(validationInput.getAttribute("data-length"));
  validationInput.classList.toggle("valid", isValid);
  validationInput.classList.toggle("invalid", !isValid);
});