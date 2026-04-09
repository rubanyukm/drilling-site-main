// Grab the menu button and nav element
const toggleBtn = document.querySelector(".nav-toggle");
const nav = document.querySelector(".site-nav");

if (!toggleBtn || !nav) {
  console.log("Toggle button or nav not found");
}

console.log("script loaded");

// Toggle mobile nav open/closed
toggleBtn.addEventListener("click", () => {
  console.log("Button Clicked");
  nav.classList.toggle('open');
  const isOpen = nav.classList.contains('open');
  toggleBtn.setAttribute("aria-expanded", String(isOpen));
});

// Set the footer year automatically
document.querySelector("#year").textContent = String(new Date().getFullYear());

// Front-end only form handler (no backend yet)
//const form = document.querySelector("#quoteForm");
//const formMsg = document.querySelector("#formMsg");

/*
form.addEventListener("submit", (e) => {
  e.preventDefault(); // prevents page refresh

  // You can wire this to email/backend later.
  formMsg.textContent = "Thanks! Your request was captured (demo). Hook this to email next.";
  form.reset();
});
*/
