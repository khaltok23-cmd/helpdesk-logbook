const scriptURL = "https://script.google.com/macros/s/AKfycbyhnNgfOEUjFKeb5kaz2ZV3I_KyUtN9jlUj9AThjr-BZtOTFxWblDcmaiTHi37l33sSoA/exec"; // Your Apps Script Web App URL

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
      // Save login state and redirect
      localStorage.setItem("loggedIn", "true");
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
