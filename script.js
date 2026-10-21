const TABS = ["home", "projects", "contact"];

function tabFromHash() {
  const id = location.hash.slice(1).toLowerCase();
  return TABS.includes(id) ? id : "home";
}

function showTab(id) {
  document.querySelectorAll(".tab").forEach((tab) => {
    tab.setAttribute("aria-selected", String(tab.dataset.tab === id));
  });
  document.querySelectorAll(".panel").forEach((panel) => {
    panel.hidden = panel.dataset.panel !== id;
  });
}

function goTo(id) {
  showTab(id);
  // pushState avoids the browser jumping to an anchor
  if (location.hash !== `#${id}`) history.pushState(null, "", `#${id}`);
}

document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => goTo(tab.dataset.tab));
});

document.querySelectorAll("[data-goto]").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    goTo(link.dataset.goto);
  });
});

window.addEventListener("popstate", () => showTab(tabFromHash()));
showTab(tabFromHash());

document.getElementById("year").textContent = new Date().getFullYear();

const walker = document.querySelector(".walker");
const bubble = walker.querySelector(".walker-bubble");
const flash = document.querySelector(".flash");
const quietMotion = matchMedia("(prefers-reduced-motion: reduce)");
let shots = 0;
let resetTimer;

walker.addEventListener("click", () => {
  shots += 1;
  if (!quietMotion.matches) {
    // restart the flash animation even on rapid clicks
    flash.classList.remove("go");
    void flash.offsetWidth;
    flash.classList.add("go");
  }
  walker.classList.add("snapped");
  bubble.textContent = shots === 1 ? "click! got you." : `click! ${shots} shots`;

  clearTimeout(resetTimer);
  resetTimer = setTimeout(() => {
    walker.classList.remove("snapped");
    bubble.textContent = "say cheese!";
  }, 1600);
});
