// Dropdown Logic
const dropdown = document.querySelector(".nav-dropdown");
const toggle = dropdown?.querySelector(".nav-dropdown-toggle");
if (dropdown && toggle) {
  toggle.addEventListener("click", (event) => {
    event.preventDefault();
    const isOpen = dropdown.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  document.addEventListener("click", (event) => {
    if (!dropdown.contains(event.target)) {
      dropdown.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      dropdown.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
}

// Mobile Menu Toggle
const mobileToggle = document.querySelector(".mobile-menu-toggle");
const navMenu = document.querySelector(".nav-menu");

if (mobileToggle && navMenu) {
  mobileToggle.addEventListener("click", () => {
    const isExpanded = mobileToggle.getAttribute("aria-expanded") === "true";
    mobileToggle.setAttribute("aria-expanded", String(!isExpanded));
    navMenu.classList.toggle("is-active");
    mobileToggle.classList.toggle("is-active");
  });
}
// Courses Grid Auto-Slide (Mobile Only)
const coursesGrid = document.querySelector(".courses-grid");

if (coursesGrid) {
  let isAutoScrolling = true;
  let scrollInterval;

  const startAutoScroll = () => {
    if (window.innerWidth > 991) return; // Only run on mobile

    scrollInterval = setInterval(() => {
      if (!isAutoScrolling) return;

      const cardWidth = coursesGrid.querySelector(".card").offsetWidth + 16; // width + gap
      const maxScroll = coursesGrid.scrollWidth - coursesGrid.clientWidth;

      if (coursesGrid.scrollLeft >= maxScroll - 5) {
        // Reset to beginning if at the end
        coursesGrid.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        coursesGrid.scrollBy({ left: cardWidth, behavior: "smooth" });
      }
    }, 3000); // Slide every 3 seconds
  };

  const stopAutoScroll = () => {
    clearInterval(scrollInterval);
  };

  // Pause on touch/manual scroll
  coursesGrid.addEventListener("touchstart", () => {
    isAutoScrolling = false;
  });

  coursesGrid.addEventListener("touchend", () => {
    // Resume after a delay
    setTimeout(() => {
      isAutoScrolling = true;
    }, 2000);
  });

  // Start the interaction
  startAutoScroll();

  // Re-evaluate on resize
  window.addEventListener("resize", () => {
    stopAutoScroll();
    startAutoScroll();
  });
}

// Testimonials Grid Auto-Slide (Mobile Only)
const testimonialsGrid = document.querySelector(".testimonials-grid");

if (testimonialsGrid) {
  let isAutoScrolling = true;
  let scrollInterval;

  const startAutoScroll = () => {
    if (window.innerWidth > 991) return; // Only run on mobile

    scrollInterval = setInterval(() => {
      if (!isAutoScrolling) return;

      const card = testimonialsGrid.querySelector(".testimonial-card");
      if (!card) return;

      const cardWidth = card.offsetWidth + 16; // width + gap
      const maxScroll = testimonialsGrid.scrollWidth - testimonialsGrid.clientWidth;

      if (testimonialsGrid.scrollLeft >= maxScroll - 5) {
        // Reset to beginning if at the end
        testimonialsGrid.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        testimonialsGrid.scrollBy({ left: cardWidth, behavior: "smooth" });
      }
    }, 3000); // Slide every 3 seconds
  };

  const stopAutoScroll = () => {
    clearInterval(scrollInterval);
  };

  // Pause on touch/manual scroll
  testimonialsGrid.addEventListener("touchstart", () => {
    isAutoScrolling = false;
  });

  testimonialsGrid.addEventListener("touchend", () => {
    // Resume after a delay
    setTimeout(() => {
      isAutoScrolling = true;
    }, 2000);
  });

  // Start the interaction
  startAutoScroll();

  // Re-evaluate on resize
  window.addEventListener("resize", () => {
    stopAutoScroll();
    startAutoScroll();
  });
}
