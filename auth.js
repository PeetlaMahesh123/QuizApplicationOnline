function signup(e) {
  e.preventDefault();

  const user = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value
  };

  localStorage.setItem(user.email, JSON.stringify(user));
  alert("Signup successful!");
  window.location.href = "login.html";
}

function login(e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const user = JSON.parse(localStorage.getItem(email));

  if (!user || user.password !== password) {
    alert("Invalid login credentials");
    return;
  }

  localStorage.setItem("loggedInUser", email);
  window.location.href = "exam.html";
}

function checkAuth() {
  if (!localStorage.getItem("loggedInUser")) {
    window.location.href = "login.html";
  }
}

function logout() {
  localStorage.removeItem("loggedInUser");
  window.location.href = "login.html";
}
