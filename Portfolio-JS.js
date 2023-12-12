`use strict`;

// Function to open the modal
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// Function to close the modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

// Add a click event listener to the trigger element
document.getElementById("overlay-icon-L").addEventListener("click", openModal);

let pigGameBtn = document.querySelector(`.pig-game-web-link`);

pigGameBtn.addEventListener(`click`, function () {
  alert(`This app isn't published due to it just being a tutorial I followed.`);
});

// JavaScript function to format the phone number
function formatPhoneNumber() {
  // Get the input element
  var phoneNumberInput = document.getElementById("phoneNumber");

  // Get the input value and remove non-numeric characters
  var phoneNumber = phoneNumberInput.value.replace(/\D/g, "");

  // Check if the phone number is not empty
  if (phoneNumber.length > 0) {
    // Format the phone number as (XXX) XXX-XXXX
    phoneNumber = phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");

    // Set the formatted value back to the input
    phoneNumberInput.value = phoneNumber;
  }
}

// Attach the formatPhoneNumber function to the input's blur event
document
  .getElementById("phoneNumber")
  .addEventListener("blur", formatPhoneNumber);

// Element Fade In
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("slide");
    }
  });
});

const hideElements = document.querySelectorAll(".hide");
hideElements.forEach((el) => observer.observe(el));

const slowHideElements = document.querySelectorAll(".slow-hide");
slowHideElements.forEach((el) => observer.observe(el));
