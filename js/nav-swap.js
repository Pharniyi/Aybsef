(function(){
  function hideMainBetweenHeaderFooter() {
    const header = document.querySelector('.site-header');
    const footer = document.querySelector('.site-footer');
    if (!header || !footer) return null;
    const hidden = [];
    let node = header.nextElementSibling;
    while (node && node !== footer) {
      hidden.push(node);
      node.style.display = 'none';
      node = node.nextElementSibling;
    }
    return hidden;
  }

  function restoreMain(hiddenNodes) {
    if (!hiddenNodes) return;
    hiddenNodes.forEach(n => n.style.display = '');
    const swap = document.getElementById('single-page-swap');
    if (swap && swap.parentNode) swap.parentNode.removeChild(swap);
  }

  function createSwapContainer(html) {
    const footer = document.querySelector('.site-footer');
    const container = document.createElement('div');
    container.id = 'single-page-swap';
    container.innerHTML = html;
    footer.parentNode.insertBefore(container, footer);
    return container;
  }

  function internshipHTML() {
    return `
      <section class="single-page internship">
        <div class="container">
          <button id="swap-back" class="btn btn-outline" style="margin-bottom:16px;">Back</button>
          <h1>Internship Program</h1>
          <p>Our internship program gives practical experience supporting community sports initiatives across coaching, events, outreach and operations.</p>
          <h3>What you will do</h3>
          <ul>
            <li>Assist coaches during training sessions and matches</li>
            <li>Support event logistics and volunteer coordination</li>
            <li>Help with community outreach and registration</li>
            <li>Work on simple monitoring, reporting and social media tasks</li>
          </ul>
          <h3>Details</h3>
          <p>Duration: 3-6 months · Location: Multiple · Stipend available</p>
          <p><a class="btn btn-primary" href="#">Apply Now</a></p>
        </div>
      </section>
    `;
  }

  function sponsorshipHTML() {
    return `
      <section class="single-page sponsorship">
        <div class="container">
          <button id="swap-back" class="btn btn-outline" style="margin-bottom:16px;">Back</button>
          <h1>Sponsorship Opportunities</h1>
          <p>Partner with us to support youth development through baseball & softball. Sponsorship packages include branding, program funding and community engagement opportunities.</p>
          <h3>Packages</h3>
          <ul>
            <li>Event sponsorship and program funding</li>
            <li>Custom partnership packages</li>
            <li>Impact reporting and visibility</li>
          </ul>
          <p><a class="btn btn-outline" href="#">Contact Us About Sponsorship</a></p>
        </div>
      </section>
    `;
  }

  document.addEventListener('click', function(e){
    const item = e.target.closest('.nav-dropdown-item');
    if (!item) return;
    const text = (item.textContent || '').trim();
    if (text !== 'Internship' && text !== 'Sponsorship') return;
    e.preventDefault();

    // hide current main content
    const hidden = hideMainBetweenHeaderFooter();
    // create single page content
    const html = text === 'Internship' ? internshipHTML() : sponsorshipHTML();
    createSwapContainer(html);

    // attach back handler
    const backBtn = document.getElementById('swap-back');
    if (backBtn) {
      backBtn.addEventListener('click', function(){
        restoreMain(hidden);
      });
    }
    // close nav dropdowns
    document.querySelectorAll('.nav-dropdown').forEach(d => d.classList.remove('is-open'));
    // scroll to top of swapped content
    const swap = document.getElementById('single-page-swap');
    if (swap) swap.scrollIntoView({behavior:'smooth'});
  });
})();
