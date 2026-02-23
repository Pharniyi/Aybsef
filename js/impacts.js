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

// Event Card Navigation handled via anchor tags

// Reports Toggle Logic
const reportsBtn = document.getElementById("reports-toggle-btn");
const reportsList = document.getElementById("reports-list");

if (reportsBtn && reportsList) {
  reportsBtn.addEventListener("click", () => {
    const isVisible = reportsList.style.display !== "none";
    reportsList.style.display = isVisible ? "none" : "block";
    reportsBtn.setAttribute("aria-expanded", String(!isVisible));
    reportsBtn.classList.toggle("active");
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", (event) => {
    if (!reportsBtn.contains(event.target) && !reportsList.contains(event.target)) {
      reportsList.style.display = "none";
      reportsBtn.setAttribute("aria-expanded", "false");
      reportsBtn.classList.remove("active");
    }
  });
}
