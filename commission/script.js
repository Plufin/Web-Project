document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    setTimeout(function () {
      const isSuccess = true;

      if (isSuccess) {
        alert("Commission sent successfully!");
        form.reset();
      } else {
        alert("Error submitting the commission. Please try again.");
      }
    }, 2000);
  });
});
const contactInput = document.getElementById("contact");

const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

contactInput.addEventListener("input", function () {
  const inputValue = contactInput.value;

  if (!emailPattern.test(inputValue)) {
    contactInput.setCustomValidity("Please enter a valid email address.");
  } else {
    contactInput.setCustomValidity("");
  }
});
