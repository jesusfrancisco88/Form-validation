const form = document.getElementById("form");
//
const passwordEl1 = document.getElementById("password1");
const passwordEl2 = document.getElementById("password2");
//
const messageContainer = document.querySelector(".messageContainer");
const message = document.getElementById("message");
// Note that the submit event fires on the <form> element itself,
// AND not on any <button> or <input type="submit">

//* Event Listener
let isValid = false;
//
function validityForm() {
  isValid = form.checkValidity();
  // Style main message for an error
  message.textContent = "Please fill out all fields";
  message.style.color = "red";
  messageContainer.style.borderColor = "red";
}

function processFormData(e) {
  e.preventDefault();
  //Validate Form
  validityForm();
}

form.addEventListener("submit", processFormData);
