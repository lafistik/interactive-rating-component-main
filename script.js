const ratingCard = document.querySelector(".rating");
const messageCard = document.querySelector(".message");
const ratingSelected = document.querySelector(".rating-selected");
let currentNum;

const ratingList = document.querySelector(".rating__numbers");
const btn = document.querySelector(".btn");

ratingList.addEventListener("click", (e) => {
  if (!e.target.classList.contains("rating__number")) return;
  e.currentTarget
    .querySelectorAll("li")
    .forEach((el) => el.classList.remove("selected"));
  e.target.classList.add("selected");
  currentNum = e.target.dataset.rating;
  console.log(currentNum);
});

btn.addEventListener("click", () => {
  ratingCard.style.display = "none";
  ratingSelected.textContent = currentNum;
  messageCard.style.display = "grid";
});
