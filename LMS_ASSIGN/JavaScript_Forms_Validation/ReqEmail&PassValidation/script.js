function checkEmail() {
  const email = document.getElementById("email");

  if (email.checkValidity()) {
    console.log("Valid Email");
  } else {
    console.log("Invalid Email");
  }
}

function checkPassword() {
  const pw = document.getElementById("pw");

  if (pw.value.length >= 8) {
    console.log("Valid Password");
  } else {
    console.log("Password must be at least 8 characters");
  }
}

const form = document.getElementById("registrationForm");
form.addEventListener("submit", function (event) {
  if (!form.checkValidity()) {
    event.preventDefault();
    console.log("Please enter valid email and password.");
  } else {
    event.preventDefault();
    console.log("Registration Successful!");
  }
});

