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

// Participants "See More / Show Less"
const VISIBLE_PARTICIPANTS = 18;
const participantsGrid = document.querySelector(".participants-grid");
const participantsToggle = document.querySelector(".participants-see-all");

if (participantsGrid && participantsToggle) {
  const participantCards = Array.from(
    participantsGrid.querySelectorAll(".participant-card")
  );
  let isExpanded = false;

  const applyParticipantsState = () => {
    participantCards.forEach((card, index) => {
      const shouldHide = !isExpanded && index >= VISIBLE_PARTICIPANTS;
      card.classList.toggle("participant-card--hidden", shouldHide);
    });

    participantsToggle.textContent = isExpanded ? "Show Less" : "Show More";
    participantsToggle.setAttribute("aria-expanded", String(isExpanded));
  };

  /* Inline nav panel for Internship / Sponsorship (same behavior across pages) */
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
        document.querySelectorAll('.nav-dropdown').forEach(d => d.classList.remove('is-open'));
        panel.style.display = 'block';
        const showIntern = text === 'Internship';
        panel.querySelector('#panel-internship').style.display = showIntern ? 'block' : 'none';
        panel.querySelector('#panel-sponsorship').style.display = showIntern ? 'none' : 'block';
        panel.scrollIntoView({ behavior: 'smooth' });
      }
    });
  })();

  if (participantCards.length <= VISIBLE_PARTICIPANTS) {
    participantsToggle.style.display = "none";
  } else {
    participantsToggle.addEventListener("click", () => {
      isExpanded = !isExpanded;
      applyParticipantsState();

      if (!isExpanded) {
        participantsGrid.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });

    applyParticipantsState();
  }
}
