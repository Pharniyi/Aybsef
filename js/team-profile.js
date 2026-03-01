document.addEventListener('DOMContentLoaded', () => {
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
        document.querySelectorAll('.nav-dropdown').forEach(d => d.classList.remove('is-open'));
        panel.style.display = 'block';
        const showIntern = text === 'Internship';
        panel.querySelector('#panel-internship').style.display = showIntern ? 'block' : 'none';
        panel.querySelector('#panel-sponsorship').style.display = showIntern ? 'none' : 'block';
        panel.scrollIntoView({ behavior: 'smooth' });
      }
    });
  })();

  // Dynamic Profile Loading Logic
  const teamData = {
    'adekunle': {
      name: 'Adedeji Adekunle',
      role: 'BoT Chair & Technical Lead',
      image: 'assets/team/Adedeji-Adekunle.png',
      bio: 'Adedeji Adekunle serves as the BoT Chair and Technical Lead at AYBSEF. With extensive experience in technical leadership and sports administration, he oversees the foundation\'s strategic technical direction and governance, ensuring high standards across all programs.'
    },
    'farounbi': {
      name: 'Oluwole Raphael Farounbi',
      role: 'Executive Director',
      image: 'assets/team/Oluwole photo 2022.JPG',
      bio: 'Oluwole Farounbi is a seasoned baseball and softball technocrat with over 36 years of comprehensive experience spanning athlete development, officiating, and sports administration. His journey in the twin sport began at a young age as a player, later expanding into roles as a scorer and certified umpire, demonstrating a deep technical and operational understanding of the game. Beyond the field, Oluwole brings a strong professional foundation in Programmes, Project Management and Development expertise that strengthens his structured approach to sports systems development and institutional capacity building. He has officiated and administered baseball and softball at local, national, and international levels, contributing significantly to governance and policy advancement within the sport. He is serving his third terms as an executive member of the Kwara State Baseball & Softball Association and a member Nigerian Baseball and Softball Association (NBSA), providing strategic leadership and organizational reform. As Co-Founder of the African Youth Baseball and Softball Empowerment Foundation (AYBSEF), Oluwole champions grassroots development through Long-Term Athlete Development (LTAD) frameworks and STEAM-based learning models. His mission is to nurture young talent, build structured pathways, and elevate African athletes to professional standards.'
    },
    'alegbe': {
      name: 'Alegbe Toba',
      role: 'Head of Coaching',
      image: 'assets/team/Toba Alegbe.jpg',
      bio: 'With over three decades of distinguished experience in baseball and softball, Coach Toba is a respected leader, mentor, and high-performance developer of athletes. Beginning his journey as a Nigerian National Team Captain, he demonstrated exceptional leadership, discipline, and competitive excellence at the highest level of play at national, regional and intercontinental championships form 1991-2003. Transitioning seamlessly into coaching, he has served as a Club Coach and State Coach, building winning programs, developing elite talent, and shaping athletes both on and off the field. His coaching philosophy integrates technical mastery, tactical intelligence, character formation, and mental resilience. He has successfully mentored numerous athletes who have advanced to higher competitive levels, earning recognition for his structured training systems and commitment to player development. His legacy is defined not only by victories, but by the strong character and leadership qualities instilled in every athlete under his guidance. He currently leads the coaching department of the AYBSEF.'
    },
    'segun': {
      name: 'Olusegun Babafemi',
      role: 'Lead Coach, Baseball',
      image: 'assets/team/Olusegun Babafemi.jpg',
      bio: 'With over 25 years of progressive experience in baseball, Coach Segun has built a discipline, player development, and competitive excellence. His journey began as a dedicated young athlete, rising through the ranks to become a senior player known for leadership, tactical intelligence, and a deep understanding of the game. Transitioning seamlessly into coaching, he served as a club coach where he developed youth and elite players, emphasizing fundamentals, mental toughness, and character formation. His coaching philosophy blends technical precision with mentorship, preparing athletes not only to compete, but to lead. Currently, he serves as the AYBSEF Baseball Coach, where he oversees structured training programs, talent identification, and long-term athlete development pathways. Under his leadership, players benefit from modern training methodologies, performance analytics, and a culture rooted in accountability and teamwork. Coach Segun remains passionate about grassroots development and building sustainable baseball systems that produce high-performing athletes. His commitment to excellence, integrity, and continuous learning continues to shape the next generation of players on and off the field.'
    },
    'bilikisu': {
      name: 'Bilikisu B. Ali',
      role: 'Lead Coach, Softball',
      image: 'assets/team/Bilikisu Ali B.jpg',
      bio: 'Coach Bilikisu has over 20 years of experience in competitive softball, she has built a career spanning athlete development, coaching excellence, and program leadership. Beginning as a dedicated leftie club player, she developed a deep technical understanding of the game, discipline, and team dynamics that would later define her coaching philosophy. Transitioning into the Foundation coaching role, she successfully mentored young athletes, emphasizing fundamentals, tactical intelligence, character formation, and performance consistency. Her athlete-centered approach integrates skill mastery, mental toughness, and strategic awareness preparing players for both competitive success and personal growth. She currently serves as the Softball Coach at African Youth Baseball and Softball Empowerment Foundation (AYBSEF), where she leads structured training programs designed to nurture emerging talent and promote excellence in youth sports development. Her commitment to discipline, teamwork, and holistic athlete development continues to impact players, families, and the broader softball community.'
    },
    'olosho': {
      name: 'Joshua Olosho',
      role: 'Lead, Information Technology',
      image: 'assets/team/Joshua Olosho.png',
      bio: 'Joshua Olosho is the IT Lead at AYBSEF, responsible for managing the foundation\'s digital infrastructure and technological systems. He ensures seamless integration of technology into educational and sports programs, supporting the mission through innovative digital solutions and robust IT management.'
    },
    'olabanji': {
      name: 'Dr. Olayide Olabanji',
      role: 'Lead, People Management',
      image: 'assets/team/Dr Olayide Olabanji.jpg',
      bio: 'Olayide A. Olabanji, PhD, SPHRi, is a passionate professional with more than two decades of progressive experience in personnel management, business operations, operations management, performance management, organizational and talent development across diverse industries. She currently serve as the People Manager and lead for the AYBSEF.'
    },
    'kehinde': {
      name: 'Kehinde',
      role: 'Assistant Coach, Softball',
      image: 'assets/team/kehinde.jpg',
      bio: 'Kehinde serves as the Assistant Coach for Softball at AYBSEF. Working closely with the head coaches, Kehinde focuses on technical skill development and supporting youth athletes as they build their fundamentals in softball.'
    }
  };

  const urlParams = new URLSearchParams(window.location.search);
  const memberId = urlParams.get('id');

  if (memberId && teamData[memberId]) {
    const data = teamData[memberId];

    // Update elements
    document.title = `${data.name} - AYBSEF`;
    const breadcrumbDesktop = document.getElementById('breadcrumb-name');
    if (breadcrumbDesktop) breadcrumbDesktop.textContent = data.name;

    const photo = document.getElementById('profile-photo');
    if (photo) {
      photo.src = data.image;
      photo.alt = data.name;
    }

    const nameEl = document.getElementById('profile-name');
    if (nameEl) nameEl.textContent = data.name;

    const roleEl = document.getElementById('profile-role');
    if (roleEl) roleEl.textContent = data.role;

    const bioEl = document.getElementById('profile-bio');
    if (bioEl) bioEl.textContent = data.bio;
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
});
