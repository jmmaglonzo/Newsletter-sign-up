"use strict";

const email = document.getElementById("email");
const form = document.getElementById("form");
const button = document.querySelector("btn");
form.addEventListener("submit", (e) => {
  if (email.value === "" || email.value === null) {
    email.style.backgroundColor = "red";
  }
});
