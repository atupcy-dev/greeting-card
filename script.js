document.getElementById("sendBtn").addEventListener("click", function () {
  const name = document.getElementById("recipientName").value;
  const email = document.getElementById("recipientEmail").value;
  const status = document.getElementById("statusMessage");

  if (!name || !email) {
    status.textContent = "❌Please enter recipient name and email.";
    status.style.color = "red";
    return;
  }

  status.textContent = `✅ Card successfully sent to ${name} (${email})`;
  status.style.color = "green";
});

document.getElementById("shareBtn").addEventListener("click", function () {
  const message = "Happy Birthday! 🎉 Wishing you joy and happiness.";
  const url = window.location.href;

  if (navigator.share) {
    navigator.share({
      title: "Birthday Greeting Card",
      text: message,
      url: url,
    });
  } else {
    alert("Sharing not supported on this browser.");
  } 
});
