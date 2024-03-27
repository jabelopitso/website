document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var surname = document.getElementById("surname").value;
    var email = document.getElementById("email").value;

    // You can implement your logic to send the contact form here
    // For demonstration, let's just show a success message
    var notification = document.getElementById("notification");
    notification.textContent =
      "Message sent! Thank you, " +
      name +
      " " +
      surname +
      ", for contacting us.";
    notification.classList.add("success");
    notification.style.display = "block";

    // Clear form fields after submission
    document.getElementById("name").value = "";
    document.getElementById("surname").value = "";
    document.getElementById("email").value = "";
  });
