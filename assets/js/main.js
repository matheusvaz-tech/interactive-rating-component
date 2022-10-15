const mainContainer = document.querySelector(".main-container");
const thankYouContainer = document.querySelector(".thank-you-container");
const submitButton = document.getElementById("submit");
const rating = document.getElementById("choice-rating");
const rates = document.querySelectorAll(".btn");

rates.forEach((rate) => {
  rate.addEventListener("click", () => {
    rating.innerHTML = rate.innerHTML;
    submitButton.disabled = false;
  });
});

submitButton.addEventListener("click", () => {
  thankYouContainer.classList.remove("hidden");
  mainContainer.style.display = "none";
});
