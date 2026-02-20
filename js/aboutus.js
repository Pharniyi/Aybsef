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