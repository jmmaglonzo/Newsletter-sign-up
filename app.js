const submitBtn = document.querySelector(".btn");
const dismissBtn = document.querySelector(".btn-2");

const inputField = document.getElementById("email");
const errorMsg = document.querySelector(".error-message");
const account = document.getElementById("account");

const container = document.querySelector(".container");
const success = document.querySelector(".success");
const validateEmail = () => {
  if (
    !inputField.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)
  ) {
    errorMsg.textContent = "Valid email required";
    inputField.style.backgroundColor = "#ffe8e6";
    inputField.style.borderColor = "#ff3860";
    inputField.style.color = "#ff3860";
    errorMsg.style.color = "#ff3860";
    errorMsg.classList.remove("active");
  } else {
    errorMsg.textContent = "";
    container.classList.toggle("active");
    success.classList.toggle("active");
    account.textContent = inputField.value;
  }
};

submitBtn.addEventListener("click", () => {
  validateEmail();
});

dismissBtn.addEventListener("click", () => {
  container.classList.toggle("active");
  success.classList.toggle("active");
});
