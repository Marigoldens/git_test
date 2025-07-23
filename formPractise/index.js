"use strict";

const emailInput = document.querySelector("#email");
const countryInput = document.querySelector("#country");
const postalCode = document.querySelector("#postalCode");
const passwordInput = document.querySelector("#password");
const passwordAgainInput = document.querySelector("#passwordAgain");
const emailError = document.querySelector("#emailError");
const countryError = document.querySelector("#countryError");
const postalCodeError = document.querySelector("#postalCodeError");
const passwordError = document.querySelector("#passwordError");
const passwordAgainError = document.querySelector("#passwordAgainError");

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.value.trim()) {
    emailInput.classList.remove("correct");
    emailInput.classList.add("error");
    emailError.textContent = "Email is required";
  } else if (emailRegex.test(email.value) === false) {
    emailInput.classList.remove("correct");
    emailInput.classList.add("error");
    emailError.textContent = "Please enter a valid email";
  } else {
    emailInput.classList.remove("error");
    emailInput.classList.add("correct");
    emailError.textContent = "";
  }
}
function isValidUSZip(zipCode) {
  const usZipRegex = /^\d{5}(-\d{4})?$/;
  if (!zipCode.value.trim()) {
    postalCode.classList.remove("correct");
    postalCode.classList.add("error");
    postalCodeError.textContent = "Please enter a valid postal code";
  } else if (usZipRegex.test(zipCode.value) === false) {
    postalCode.classList.remove("correct");
    postalCode.classList.add("error");
    postalCodeError.textContent = "Please enter a valid postal code";
  } else {
    postalCode.classList.remove("error");
    postalCode.classList.add("correct");
    postalCodeError.textContent = "";
  }
}
function isPasswordValid(password) {
  if (!password.value.trim()) {
    passwordInput.classList.remove("correct");
    passwordInput.classList.add("error");
    passwordError.textContent = "Please enter a valid password";
  } else if (password.value.length < 8) {
    passwordInput.classList.remove("correct");
    passwordInput.classList.add("error");
    passwordError.textContent = "Password should contain 8 or more characters";
  } else {
    passwordInput.classList.remove("error");
    passwordInput.classList.add("correct");
    passwordError.textContent = "";
  }
}

function isPasswordAgainValid(passwordAgain) {
  if (!passwordAgain.value.trim()) {
    passwordAgainInput.classList.remove("correct");
    passwordAgainInput.classList.add("error");
    passwordAgainError.textContent = "Incorrect password";
  } else if (passwordAgainInput.value !== passwordInput.value) {
    passwordAgainInput.classList.remove("correct");
    passwordAgainInput.classList.add("error");
    passwordAgainError.textContent = "Passwords do not match";
  } else if (passwordAgainInput.value === passwordInput.value) {
    passwordAgainInput.classList.remove("error");
    passwordAgainInput.classList.add("correct");
    passwordAgainError.textContent = "";
  }
}

function isCountryValid(country) {
  if (!country.value.trim()) {
    countryInput.classList.remove("correct");
    countryInput.classList.add("error");
    countryError.textContent = "Country is required";
  } else if (country.value.length < 2) {
    countryInput.classList.remove("correct");
    countryInput.classList.add("error");
    countryError.textContent = "Country is required";
  } else {
    countryInput.classList.remove("error");
    countryInput.classList.add("correct");
    countryError.textContent = "";
  }
}

emailInput.addEventListener("input", () => {
  isValidEmail(emailInput);
});
countryInput.addEventListener("input", () => {
  isCountryValid(countryInput);
});
postalCode.addEventListener("input", () => {
  isValidUSZip(postalCode);
});
passwordInput.addEventListener("input", function () {
  isPasswordValid(passwordInput);
});
passwordAgainInput.addEventListener("input", function () {
  isPasswordAgainValid(passwordAgainInput);
});

const formSignUp = document.querySelector("#formSignUp");

// Add an event listener for the 'submit' event
formSignUp.addEventListener("submit", (event) => {
  // 1. Prevent the default form submission
  event.preventDefault();

  // 2. Re-run validation for all fields
  isValidEmail(emailInput);
  isCountryValid(countryInput);
  isValidUSZip(postalCode);
  isPasswordValid(passwordInput);
  isPasswordAgainValid(passwordAgainInput);

  // 3. Check overall validity
  const isFormValid =
    emailInput.classList.contains("correct") &&
    countryInput.classList.contains("correct") &&
    postalCode.classList.contains("correct") &&
    passwordInput.classList.contains("correct") &&
    passwordAgainInput.classList.contains("correct");

  // Alternatively, check if any error messages are visible or if any input has the 'error' class
  // const hasErrors = document.querySelectorAll('.errorMsg:not(:empty)').length > 0 ||
  //                   document.querySelectorAll('.error').length > 0;

  // 4. Provide feedback
  if (isFormValid) {
    alert("High five! Form submitted successfully!"); // Or display a message on the page
    // You could also clear the form here: event.target.reset();
  } else {
    alert("Please correct the errors in the form before submitting."); // Or display a message on the page
    // Optional: Scroll to the first error or focus on it
    const firstErrorField = document.querySelector(".error");
    if (firstErrorField) {
      firstErrorField.focus();
    }
  }
});
