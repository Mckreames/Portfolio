`use strict`;

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

// Modal Windows
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnClosedModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");
console.log(btnsOpenModal);

const openModal = function () {
  modal.classList.remove(`hidden`);
  overlay.classList.remove(`hidden`);
};

const closeModal = function () {
  modal.classList.add(`hidden`);
  overlay.classList.add(`hidden`);
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener(`click`, openModal);
  // modal.style.display = `block`;
}

btnClosedModal.addEventListener(`click`, closeModal);
overlay.addEventListener(`click`, closeModal);

document.addEventListener(`keydown`, function (e) {
  console.log(e.key);

  if (e.key === `Escape` && !modal.classList.contains(`hidden`)) {
    closeModal();
  }
});
