function authenticate(userId, password) {

  let message;

  if (userId === "admin" && password === "secret") {

    message = "Welcome admin!";

  } else {

    message = "BAD LOGIN CREDENTIALS";

  }

  console.log(message);

  document.querySelector("#loginOutput").textContent = message;

}

function runAuthenticator() {

  const userId = prompt("Enter username:");

  const password = prompt("Enter password:");

  authenticate(userId, password);

}