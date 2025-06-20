const close = document.querySelector(".close");
const open = document.querySelector(".open");

const mobileMenu = document.querySelector(".mobile-menu-list");
const mobileSubMenu = document.querySelector(".mobile-sub-menu");

const showMenu = () => {
  open.classList.add("hide");
  close.classList.add("show");
  mobileMenu.classList.add("show");
};

const closeMenu = () => {
  close.classList.remove("show");
  open.classList.remove("hide");
  mobileMenu.classList.remove("show");
};

const handleSubMenu = () => {
  mobileSubMenu.classList.toggle("show");
};
const subMenu = document.querySelector(".sub-menu");

const handleMenu = () => {
  if (subMenu) {
    subMenu.classList.toggle("show-sub-menu");
  }
};

const slider = document.querySelectorAll(".hero-container .items");
let currentSlide = 0;
const slideInterval = 3000;

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

let slidesToShow = window.innerWidth <= 768 ? 1 : 3; // default
let slideWidth = slides[0].offsetWidth;
let currentIndex = 0;
let autoScroll;

function updateSliderSettings() {
  slidesToShow = window.innerWidth <= 768 ? 1 : 3;
  slideWidth = slides[0].offsetWidth;
  updateSliderPosition();
}

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
  if (currentIndex >= slides.length) {
    currentIndex = 0;
  }
  updateSliderPosition();
}

function movePrev() {
  currentIndex -= slidesToShow;
  if (currentIndex < 0) {
    currentIndex = Math.max(0, slides.length - slidesToShow);
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

window.addEventListener("resize", () => {
  updateSliderSettings();
});

window.addEventListener("load", () => {
  updateSliderSettings();
  startAutoScroll();
});

// Optional pause on hover
slideContainer.addEventListener("mouseenter", stopAutoScroll);
slideContainer.addEventListener("mouseleave", startAutoScroll);

const questions = document.querySelectorAll(".faq-question");

questions.forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    const isActive = question.classList.contains("active");

    // Close all open answers
    document
      .querySelectorAll(".faq-answer")
      .forEach((a) => (a.style.display = "none"));
    document
      .querySelectorAll(".faq-question")
      .forEach((q) => q.classList.remove("active"));

    // Toggle current
    if (!isActive) {
      answer.style.display = "block";
      question.classList.add("active");
    }
  });
});
