(function () {
  var AUTH_KEY = "aybsef_logged_in";

  function isLoggedIn() {
    try {
      return localStorage.getItem(AUTH_KEY) === "true";
    } catch (e) {
      return false;
    }
  }

  function setLoggedIn(value) {
    try {
      if (value) {
        localStorage.setItem(AUTH_KEY, "true");
      } else {
        localStorage.removeItem(AUTH_KEY);
      }
    } catch (e) {}
  }

  function redirectToSportApplication() {
    window.location.replace("sport-applications.html");
  }

  function showPanel(panelId) {
    var panels = document.querySelectorAll(".mylogin-panel");
    panels.forEach(function (p) {
      p.classList.toggle("active", p.id === panelId);
    });
  }

  function initPanelSwitch() {
    var showSignup = document.getElementById("show-signup");
    var showSignin = document.getElementById("show-signin");
    if (showSignup) {
      showSignup.addEventListener("click", function () {
        showPanel("signup-panel");
      });
    }
    if (showSignin) {
      showSignin.addEventListener("click", function () {
        showPanel("signin-panel");
      });
    }
  }

  function initPasswordToggle() {
    document.querySelectorAll(".mylogin-password-toggle").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var id = this.getAttribute("data-for");
        var input = document.getElementById(id);
        if (!input) return;
        var isPassword = input.type === "password";
        input.type = isPassword ? "text" : "password";
        btn.setAttribute("aria-label", isPassword ? "Hide password" : "Show password");
        btn.setAttribute("aria-pressed", isPassword ? "true" : "false");
      });
    });
  }

  function initForgotPassword() {
    var link = document.getElementById("forgot-password-link");
    if (link) {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        /* Placeholder: e.g. open a modal or redirect to forgot-password page */
      });
    }
  }

  function handleSignIn(e) {
    e.preventDefault();
    var email = document.getElementById("signin-email");
    var password = document.getElementById("signin-password");
    if (email && password && email.value.trim() && password.value.trim()) {
      setLoggedIn(true);
      redirectToSportApplication();
    }
  }

  function handleSignUp(e) {
    e.preventDefault();
    var name = document.getElementById("signup-name");
    var email = document.getElementById("signup-email");
    var password = document.getElementById("signup-password");
    if (name && email && password && name.value.trim() && email.value.trim() && password.value.trim()) {
      setLoggedIn(true);
      redirectToSportApplication();
    }
  }

  function initForms() {
    var signinForm = document.getElementById("signin-form");
    var signupForm = document.getElementById("signup-form");
    if (signinForm) signinForm.addEventListener("submit", handleSignIn);
    if (signupForm) signupForm.addEventListener("submit", handleSignUp);
  }

  function initMobileMenu() {
    var mobileToggle = document.querySelector(".mobile-menu-toggle");
    var navMenu = document.querySelector(".nav-menu");
    if (mobileToggle && navMenu) {
      mobileToggle.addEventListener("click", function () {
        var isExpanded = mobileToggle.getAttribute("aria-expanded") === "true";
        mobileToggle.setAttribute("aria-expanded", String(!isExpanded));
        navMenu.classList.toggle("is-active");
        mobileToggle.classList.toggle("is-active");
      });
    }
  }

  function init() {
    initPanelSwitch();
    initPasswordToggle();
    initForgotPassword();
    initForms();
    /* Always show sign in / sign up first; redirect only after form submit */
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
