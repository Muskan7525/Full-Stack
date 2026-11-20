const themeToggle = document.getElementById("themeToggle");
const body = document.body;
const themeIcon = themeToggle.querySelector("i");
const savedTheme = localStorage.getItem("portfolioTheme");

if (savedTheme === "dark") {
  body.classList.add("dark-mode");
  themeIcon.classList.replace("bi-moon-stars", "bi-sun");
}

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  if (body.classList.contains("dark-mode")) {
    themeIcon.classList.replace("bi-moon-stars", "bi-sun");
    localStorage.setItem("portfolioTheme", "dark");
  } else {
    themeIcon.classList.replace("bi-sun", "bi-moon-stars");
    localStorage.setItem("portfolioTheme", "light");
  }
});

const navLinks = document.querySelectorAll(".nav-link");
const navbarCollapse = document.getElementById("navbarNav");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (navbarCollapse.classList.contains("show")) {
      const navbar = bootstrap.Collapse.getOrCreateInstance(navbarCollapse);
      navbar.hide();
    }
  });
});

const footer = document.querySelector(".footer");
footer.querySelector("p:last-child").innerHTML =
  `© ${new Date().getFullYear()} Muskan Gupta. All rights reserved.`;
