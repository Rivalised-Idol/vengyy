/* ===================================
   SLIDESHOW NAVIGATION
   =================================== */

// State management
let currentSlide = 1;
const totalSlides = 3;

// DOM elements
const slides = document.querySelectorAll(".slide");
const indicators = document.querySelectorAll(".indicator");
const backButton = document.getElementById("backButton");
const nextButton = document.getElementById("nextButton");
const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const celebration = document.getElementById("celebration");
const celebrationHearts = document.getElementById("celebrationHearts");

/* ===================================
   INITIALIZATION
   =================================== */

// Initialize on page load
document.addEventListener("DOMContentLoaded", () => {
  updateSlideDisplay();
  createSakuraPetals();
  setupEventListeners();
});

/* ===================================
   SLIDE NAVIGATION FUNCTIONS
   =================================== */

// Update which slide is visible
function updateSlideDisplay() {
  // Update slides
  slides.forEach((slide, index) => {
    if (index + 1 === currentSlide) {
      slide.classList.add("active");
    } else {
      slide.classList.remove("active");
    }
  });

  // Update indicators
  indicators.forEach((indicator, index) => {
    if (index + 1 === currentSlide) {
      indicator.classList.add("active");
    } else {
      indicator.classList.remove("active");
    }
  });

  // Update button states
  updateNavigationButtons();
}

// Enable/disable navigation buttons based on current slide
function updateNavigationButtons() {
  // Back button disabled on first slide
  if (currentSlide === 1) {
    backButton.disabled = true;
  } else {
    backButton.disabled = false;
  }

  // Next button disabled on last slide
  if (currentSlide === totalSlides) {
    nextButton.disabled = true;
  } else {
    nextButton.disabled = false;
  }
}

// Navigate to specific slide
function goToSlide(slideNumber) {
  if (slideNumber >= 1 && slideNumber <= totalSlides) {
    currentSlide = slideNumber;
    updateSlideDisplay();
  }
}

// Navigate to next slide
function nextSlide() {
  if (currentSlide < totalSlides) {
    currentSlide++;
    updateSlideDisplay();
  }
}

// Navigate to previous slide
function previousSlide() {
  if (currentSlide > 1) {
    currentSlide--;
    updateSlideDisplay();
  }
}

/* ===================================
   EVENT LISTENERS
   =================================== */

function setupEventListeners() {
  // Navigation buttons
  nextButton.addEventListener("click", nextSlide);
  backButton.addEventListener("click", previousSlide);

  // Indicator dots
  indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => {
      goToSlide(index + 1);
    });
  });

  // Answer buttons on final slide
  yesButton.addEventListener("click", handleYesClick);
  noButton.addEventListener("click", handleNoClick);

  // Keyboard navigation
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight" && currentSlide < totalSlides) {
      nextSlide();
    } else if (e.key === "ArrowLeft" && currentSlide > 1) {
      previousSlide();
    }
  });
}

/* ===================================
   FINAL SLIDE INTERACTIONS
   =================================== */

// Handle "Yes" button click
function handleYesClick() {
  // Hide buttons
  yesButton.style.display = "none";
  noButton.style.display = "none";

  // Show celebration
  celebration.classList.remove("hidden");

  // Create floating hearts animation
  createFloatingHearts();
}

// Handle "No" button click - playful movement
function handleNoClick() {
  // Get button position
  const buttonRect = noButton.getBoundingClientRect();
  const containerRect = noButton.parentElement.getBoundingClientRect();

  // Calculate random new position within container
  const maxX = containerRect.width - buttonRect.width;
  const maxY = containerRect.height - buttonRect.height;

  const randomX = Math.random() * (maxX - 100) - (maxX - 100) / 2;
  const randomY = Math.random() * 100 - 50;

  // Apply transform
  noButton.style.transform = `translate(${randomX}px, ${randomY}px)`;

  // Optional: make the button smaller each time
  const currentScale = parseFloat(noButton.dataset.scale || 1);
  const newScale = Math.max(0.2, currentScale - 0.1);
  noButton.dataset.scale = newScale;
  noButton.style.transform += ` scale(${newScale})`;
}

// Create floating hearts for celebration
function createFloatingHearts() {
  const heartEmojis = ["💕", "💖", "💗", "💓", "💝"];

  // Create multiple hearts with staggered timing
  for (let i = 0; i < 15; i++) {
    setTimeout(() => {
      const heart = document.createElement("span");
      heart.className = "floating-heart";
      heart.textContent =
        heartEmojis[Math.floor(Math.random() * heartEmojis.length)];

      // Random horizontal position
      heart.style.left = `${Math.random() * 100}%`;

      // Random animation delay
      heart.style.animationDelay = `${Math.random() * 2}s`;

      celebrationHearts.appendChild(heart);

      // Remove heart after animation completes
      setTimeout(() => {
        heart.remove();
      }, 3000);
    }, i * 200);
  }
}

/* ===================================
   SAKURA PETALS BACKGROUND
   =================================== */

function createSakuraPetals() {
  const sakuraContainer = document.getElementById("sakuraContainer");
  const petalCount = 60;

  for (let i = 0; i < petalCount; i++) {
    const petal = document.createElement("div");
    petal.className = "sakura-petal";

    // Random horizontal position
    petal.style.left = `${Math.random() * 100}%`;

    // Random animation duration (slower fall)
    const duration = 10 + Math.random() * 10; // 15-30 seconds
    petal.style.animationDuration = `${duration}s`;

    // Random animation delay for staggered effect
    petal.style.animationDelay = `${Math.random() * 10}s`;

    // Random size variation
    const size = 8 + Math.random() * 8; // 8-16px
    petal.style.width = `${size}px`;
    petal.style.height = `${size}px`;

    sakuraContainer.appendChild(petal);
  }
}

/* ===================================
   ADDITIONAL POLISH
   =================================== */

// Smooth scroll for content wrapper if needed
document.querySelectorAll(".content-wrapper").forEach((wrapper) => {
  wrapper.style.scrollBehavior = "smooth";
});
