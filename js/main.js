const subMenu = document.querySelector(".sub-menu");

const handleMenu = () => {
  subMenu.classList.toggle("show-sub-menu");
};

const slider = document.querySelectorAll(".hero-container .items");
let currentSlide = 0;
const slideInterval = 5000; // 3 seconds

function showSlide(index) {
  slider.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) {
      slide.classList.add("active");
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slider.length;
  showSlide(currentSlide);
}

showSlide(currentSlide);
setInterval(nextSlide, slideInterval);

const slideContainer = document.getElementById("slideContainer");
const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

const slidesToShow = 3;
const totalSlides = slides.length;
const slideWidth = slides[0].offsetWidth; // Each slide width
let currentIndex = 0;
let autoScroll;

function updateSliderPosition() {
  slideContainer.style.transform = `translateX(-${
    currentIndex * slideWidth
  }px)`;
}

function startAutoScroll() {
  autoScroll = setInterval(() => {
    moveNext();
  }, 4000);
}

function stopAutoScroll() {
  clearInterval(autoScroll);
}

function moveNext() {
  currentIndex += slidesToShow;
  if (currentIndex >= totalSlides) {
    currentIndex = 0;
  }
  updateSliderPosition();
}

function movePrev() {
  currentIndex -= slidesToShow;
  if (currentIndex < 0) {
    currentIndex = Math.max(0, totalSlides - slidesToShow);
  }
  updateSliderPosition();
}

nextBtn.addEventListener("click", () => {
  stopAutoScroll();
  moveNext();
  startAutoScroll();
});

prevBtn.addEventListener("click", () => {
  stopAutoScroll();
  movePrev();
  startAutoScroll();
});

// Initialize
window.addEventListener("load", () => {
  updateSliderPosition();
  startAutoScroll();
});

// Optional: pause auto scroll on hover
slideContainer.addEventListener("mouseenter", stopAutoScroll);
slideContainer.addEventListener("mouseleave", startAutoScroll);
