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

/* Inline nav panel for Internship / Sponsorship */
(function () {
  function createNavPanel() {
    if (document.getElementById('nav-panel')) return document.getElementById('nav-panel');
    const panel = document.createElement('div');
    panel.id = 'nav-panel';
    panel.innerHTML = `
      <div class="container nav-panel-inner">
        <button class="nav-panel-close" aria-label="Close">×</button>
        <div class="nav-panel-content">
          <section id="panel-internship">
            <h3>Internship</h3>
            <p>Join our Internship program to gain hands-on experience supporting community sports initiatives. Interns help with coaching support, event logistics, data entry, and community outreach.</p>
            <ul>
              <li>Duration: 3-6 months</li>
              <li>Stipend and travel support available</li>
              <li>Mentorship from program leads</li>
            </ul>
            <p><a class="btn btn-primary" href="#">Apply for Internship</a></p>
          </section>
          <section id="panel-sponsorship" style="display:none">
            <h3>Sponsorship</h3>
            <p>Partner with us to support youth development through baseball & softball. Sponsorship packages include branding, program funding, and community engagement opportunities.</p>
            <ul>
              <li>Event sponsorship and program funding</li>
              <li>Custom partnership packages</li>
              <li>Impact reporting and visibility</li>
            </ul>
            <p><a class="btn btn-outline" href="#">Learn about Sponsorship</a></p>
          </section>
        </div>
      </div>
    `;
    const header = document.querySelector('.site-header');
    if (header && header.parentNode) header.parentNode.insertBefore(panel, header.nextSibling);

    panel.querySelector('.nav-panel-close').addEventListener('click', () => {
      panel.style.display = 'none';
    });
    return panel;
  }

  document.addEventListener('click', (e) => {
    const item = e.target.closest('.nav-dropdown-item');
    if (!item) return;
    const text = (item.textContent || '').trim();
    if (text === 'Internship' || text === 'Sponsorship') {
      e.preventDefault();
      const panel = createNavPanel();
      // close dropdown menu
      document.querySelectorAll('.nav-dropdown').forEach(d => d.classList.remove('is-open'));
      panel.style.display = 'block';
      const showIntern = text === 'Internship';
      panel.querySelector('#panel-internship').style.display = showIntern ? 'block' : 'none';
      panel.querySelector('#panel-sponsorship').style.display = showIntern ? 'none' : 'block';
      // smooth scroll to panel
      panel.scrollIntoView({ behavior: 'smooth' });
    }
  });
})();

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

// Hero Background Slider
const heroSlides = Array.from(document.querySelectorAll(".hero-slide"));

if (heroSlides.length > 1 && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  let activeIndex = 0;
  const slideDelay = 3500;

  setInterval(() => {
    const nextIndex = (activeIndex + 1) % heroSlides.length;

    heroSlides[activeIndex].classList.remove("is-active");
    heroSlides[activeIndex].classList.add("is-exit");

    heroSlides[nextIndex].classList.remove("is-exit");
    heroSlides[nextIndex].classList.add("is-active");

    activeIndex = nextIndex;
  }, slideDelay);
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
