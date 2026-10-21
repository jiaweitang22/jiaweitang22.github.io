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
walker.addEventListener("click", () => {
  const paused = walker.classList.toggle("paused");
  walker.setAttribute("aria-pressed", String(paused));
  walker.setAttribute("aria-label", paused ? "Paused robot. Click to resume." : "Walking robot. Click to pause.");
  bubble.textContent = paused ? "break time!" : "beep boop!";
});
