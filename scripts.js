window.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".newsletter form");
  const emailInput = document.querySelector(".newsletter input[type='email']");
  const messageArea = document.querySelector(".newsletter .message");

  // Safety check: elements exist
  if (!form || !emailInput || !messageArea) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = emailInput.value.trim();

    if (email !== "" && emailInput.checkValidity()) {
      messageArea.textContent =
        `Thank you! Your email address ${email} has been added to our mailing list!`;
      emailInput.value = "";
    } else {
      messageArea.textContent = "Please enter a valid email address.";
    }
  });
});