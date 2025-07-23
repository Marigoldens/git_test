const imageOne = "./IMGs/jonas-degener-Hvl4NH9mF8M-unsplash.jpg";
const imageTwo = "./IMGs/pascal-debrunner-mhVlYssLoWE-unsplash.jpg";
const imageThree = "./IMGs/sumup-wVqTWs-1nmI-unsplash.jpg";

const imageContainer = document.querySelector(".imageContainer");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");
const navigationDotsContainer = document.querySelector(".navigation-dots");

let imageArray = [imageOne, imageTwo, imageThree];
let currentIndex = 0;

function setupImages() {
  imageArray.forEach((src) => {
    const img = document.createElement("img");
    img.src = src;
    imageContainer.appendChild(img);
  });
}

function setupDots() {}
