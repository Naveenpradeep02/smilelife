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

const techData = [
  {
    title: "Digital X-Rays",
    subtitle: "Better Images. Less Radiation.",
    image: "../img/best-dental-in-chenai-x-ray.png",
    desc: "Instant results with up to 90% less radiation than traditional x-rays. <br><strong>How this helps you:</strong> Faster diagnosis with clearer, safer images — so we can spot issues early and treat them right.",
  },
  {
    title: "Intraoral Scanners",
    subtitle: "No More Goopy Impressions",
    image: "../img/best-dental-in-chenai-Intraoral.png",
    desc: "3D digital scans mean faster, more precise results — without the mess. <br><strong>How this helps you:</strong> No gagging trays or discomfort. Just smooth, quick scans for crowns, aligners, and smile makeovers.",
  },
  {
    title: "Ultrasonic Cleaners",
    subtitle: "Gentle Yet Deep Cleaning",
    image: "../img/best-dental-in-chenai-Ultrasonic.png",
    desc: "Removes plaque and tartar using sound waves — no scraping required. <br><strong>How this helps you:</strong> Get a fresh, deep clean that’s easy on your gums and free from the “metal scraping” feel.",
  },
  {
    title: "Laser Dentistry",
    subtitle: "Treat with Light, Not Fear",
    image: "../img/best-dental-in-chenai-Laser.png",
    desc: "We use soft-tissue lasers for gum treatments, ulcers, and cavities — no drills or stitches. <br><strong>How this helps you:</strong> Quieter, gentler, and faster healing treatments — especially great if you're nervous about dental work.",
  },
  {
    title: "Ergonomic Chairs",
    subtitle: "Relax. We’ve Got You.",
    image: "../img/best-dental-in-chenai-Ergonomic.png",
    desc: "Our dental chairs are built for long procedures — with your comfort in mind. <br><strong>How this helps you:</strong> No stiffness, no strain. Just relax and let us take care of your smile.",
  },
  {
    title: "Sterilization",
    subtitle: "Clean. Every Time.",
    image: "../img/best-dental-in-chenai-Sterilization.png",
    desc: "We follow strict hospital-grade hygiene at every step. <br><strong>Why this matters:</strong> Every tool and surface is sanitized — so you always feel safe in our hands.",
  },
  {
    title: "Painless Injection",
    subtitle: "The Shot You Don’t Feel",
    image: "../img/best-dental-in-chenai-Painless.png",
    desc: "We use ultra-fine needles and numbing gels to reduce pain. <br><strong>How this helps you:</strong> Most patients don’t even notice the injection. That’s how smooth it is.",
  },
];

function showTech(index) {
  const buttons = document.querySelectorAll(".tech-list button");
  buttons.forEach((btn) => btn.classList.remove("active"));
  buttons[index].classList.add("active");

  const tech = techData[index];
  document.getElementById("techDisplay").innerHTML = `
  <div class="top-img">
<img src="${tech.image}" alt="${tech.title}">
<div>
<div class="tech-title">${tech.title}</div>
<div class="tech-subtitle">${tech.subtitle}</div>
</div>
</div>
<div>

<div class="tech-desc">${tech.desc}</div>
</div>
`;
}

window.onload = () => showTech(0);
