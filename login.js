const scriptURL = "https://script.google.com/macros/s/AKfycbyhnNgfOEUjFKeb5kaz2ZV3I_KyUtN9jlUj9AThjr-BZtOTFxWblDcmaiTHi37l33sSoA/exec"; // Paste your Apps Script Web App URL here

// Show/hide password button
const togglePassword = document.getElementById("togglePassword");
const passwordField = document.getElementById("password");

togglePassword.addEventListener("click", () => {
  if (passwordField.type === "password") {
    passwordField.type = "text";
    togglePassword.innerText = "🙈"; // Optional: change icon
  } else {
    passwordField.type = "password";
    togglePassword.innerText = "👁️";
  }
});

// Login form submission
document.getElementById("loginForm").addEventListener("submit", e => {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  fetch(scriptURL, {
    method: "POST",
    body: JSON.stringify({ type: "login", username, password })
  })
  .then(res => res.json())
  .then(data => {
    if (data.success) {
      // Login successful → redirect to logbook page
      window.location.href = "logbook.html";
    } else {
      document.getElementById("loginStatus").innerText = "Incorrect username or password.";
    }
  })
  .catch(err => {
    document.getElementById("loginStatus").innerText = "Error connecting to server.";
    console.error(err);
  });
});
