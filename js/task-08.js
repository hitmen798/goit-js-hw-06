const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = {
    email: loginForm.elements.email.value,
    password: loginForm.elements.password.value,
  };

  if (formData.email === "" || formData.password === "") {
    alert("Please fill in all fields.");
  } else {
    console.log(formData);
    loginForm.reset();
  }
});