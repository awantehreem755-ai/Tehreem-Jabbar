// Simple form submit message (no backend required)
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".order-form");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      alert("Thank you! Your order has been submitted (demo).");
      form.reset();
    });
  }
});