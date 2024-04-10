import "../styles/style.css";

const formElement = document.querySelector(".newUserForm");
const errorMsg = document.querySelector(".errorMsgs");

const fName = document.querySelector("#fName");
const lName = document.querySelector("#lName");
const email = document.querySelector("#email");
const country = document.querySelector("#country");
const zipCode = document.querySelector("#zipCode");
const password = document.querySelector("#password");
const passwordConfirm = document.querySelector("#passwordConfirm");

formElement.onsubmit = (e) => {
  if (!formElement.checkValidity()) {
    e.preventDefault();
    showError();
  }
};

function showError() {
  if (!fName.validity.valid) {
    errorMsg.textContent = "please enter first name";
    errorMsg.style.color = "red";
    setTimeout(() => {
      errorMsg.textContent = "";
    }, 1000);
    return;
  }
  if (!lName.validity.valid) {
    errorMsg.textContent = "please enter last name";
    errorMsg.style.color = "red";
    setTimeout(() => {
      errorMsg.textContent = "";
    }, 1000);
    return;
  }
  if (!email.validity.valid) {
    errorMsg.textContent = "please enter a valid email address";
    errorMsg.style.color = "red";
    setTimeout(() => {
      errorMsg.textContent = "";
    }, 1000);
    return;
  }
  if (!country.validity.valid) {
    errorMsg.textContent = "please enter your country";
    errorMsg.style.color = "red";
    setTimeout(() => {
      errorMsg.textContent = "";
    }, 1000);
    return;
  }
  if (!zipCode.validity.valid) {
    errorMsg.textContent = "please enter a valid Zip Code";
    errorMsg.style.color = "red";
    setTimeout(() => {
      errorMsg.textContent = "";
    }, 1000);
    return;
  }
  if (!password.validity.valid) {
    errorMsg.textContent = "please choose your password";
    errorMsg.style.color = "red";
    setTimeout(() => {
      errorMsg.textContent = "";
    }, 1000);
    return;
  }
  if (!passwordConfirm.validity.valid) {
    errorMsg.textContent = "please confirm your password";
    errorMsg.style.color = "red";
    setTimeout(() => {
      errorMsg.textContent = "";
    }, 1000);
    return;
  }
}
