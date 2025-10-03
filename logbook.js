const scriptURL = "https://script.google.com/macros/s/AKfycbyhnNgfOEUjFKeb5kaz2ZV3I_KyUtN9jlUj9AThjr-BZtOTFxWblDcmaiTHi37l33sSoA/exec"; // Same Web App URL as login.js

document.getElementById("logForm").addEventListener("submit", e => {
  e.preventDefault();

  const data = {
    officer: document.getElementById("officer").value,
    startDate: document.getElementById("startDate").value,
    startTime: document.getElementById("startTime").value,
    endDate: document.getElementById("endDate").value,
    endTime: document.getElementById("endTime").value,
    requestor: document.getElementById("requestor").value,
    issue: document.getElementById("issue").value,
    resolution: document.getElementById("resolution").value
  };

  // Validation: no blank fields
  if (!data.officer || !data.startDate || !data.startTime ||
      !data.endDate || !data.endTime || !data.requestor ||
      !data.issue || !data.resolution) {
    alert("⚠️ Please fill in all fields before submitting.");
    return;
  }

  fetch(scriptURL, {
    method: "POST",
    body: JSON.stringify(data)
  })
  .then(res => res.json())
  .then(msg => {
    document.getElementById("status").innerText = "Submitted successfully!";
    document.getElementById("logForm").reset();
  })
  .catch(err => {
    document.getElementById("status").innerText = "Error submitting data.";
    console.error(err);
  });
});

