const form = document.getElementById("form");
//
const passwordEl1 = document.getElementById("password1");
const passwordEl2 = document.getElementById("password2");
//
const messageContainer = document.querySelector(".message-container");
const message = document.getElementById("message");
// Note that the submit event fires on the <form> element itself,
// AND not on any <button> or <input type="submit">

//\* Event Listener
let isValid = false;
let password = false;
//
function validityForm() {
  isValid = form.checkValidity();
  // Style main message for an error
  if (!isValid) {
    message.textContent = "Please fill out all fields";
    message.style.color = "red";
    messageContainer.style.borderColor = "red";
    return;
  }
  // Check to see if passwords match
  if (passwordEl1.value === passwordEl2.value) {
    passwordMatch = true;
    passwordEl1.style.borderColor = "green";
    passwordEl2.style.borderColor = "green";
  } else {
    passwordMatch = false;
    message.textContent = "Make sure passwords match";
    message.style.color = "red";
    messageContainer.style.borderColor = "red";
    passwordEl1.style.borderColor = "red";
    passwordEl2.style.borderColor = "red";
    return;
  }

  // if form is valid and pasword match.
  if (isValid && passwordMatch) {
    message.textContent = "Succesfully Registered!";
    message.style.color = "green";
    messageContainer.style.borderColor = "green";
  }
}

function storeFormData() {
  const user = {
    name: form.name.value,
    phone: form.phone.value,
    email: form.email.value,
    website: form.website.value,
    password: form.password.value,
  };
  // Doing something with data. (like passing to a data base);
  console.log(user);
}

function processFormData(e) {
  e.preventDefault();
  //Validate Form
  validityForm();

  // submit data if valid
  if (isValid && passwordMatch) {
    storeFormData();
  }
}

form.addEventListener("submit", processFormData);
