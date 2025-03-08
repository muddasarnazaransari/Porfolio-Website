//Dark Mode
let mode = document.querySelector("#mode-icon");
let modeButton = document.querySelector("#mode-button");
let body = document.body;
let header = document.querySelector("header");
let nav = document.querySelector(".nav");
let anchor = document.querySelectorAll("a");
let currentMode = "DARK MODE";
let menuOpen = document.querySelector("#menu-open");
let menuClose = document.querySelector("#menu-close");

function toggleMode() {
  let element = this; // 'this' refers to the clicked element (mode or modeButton)
  element.style.opacity = "0";
  element.style.transform = "scale(0.8)";

  setTimeout(() => {
    if (currentMode === "DARK MODE") {
      mode.classList.remove("uil-sun");
      mode.classList.add("uil-moon");
      body.classList.add("light-body");
      header.classList.add("light-header");
      nav.style.backgroundColor = "#F8F9FA";
      menuOpen.style.color = "black";
      menuClose.style.color = "black";
      modeButton.innerHTML = currentMode;
      anchor.forEach((a) => a.classList.add("anchor-light"));
      currentMode = "LIGHT MODE";
    } else {
      mode.classList.remove("uil-moon");
      mode.classList.add("uil-sun");
      body.classList.remove("light-body");
      header.classList.remove("light-header");
      nav.style.backgroundColor = "#1E1E1E";
      menuOpen.style.color = "white";
      menuClose.style.color = "white";
      modeButton.innerHTML = currentMode;
      anchor.forEach((a) => a.classList.remove("anchor-light"));
      currentMode = "DARK MODE";
    }
    element.style.opacity = "1";
    element.style.transform = "scale(1)";
  }, 300);
}

mode.addEventListener("click", toggleMode);
modeButton.addEventListener("click", toggleMode);

// Menu Button Toggle
modeButton.style.display = "none";
menuOpen.addEventListener("click", () => {
  nav.style.right = "0";
  modeButton.style.display = "block";
});

menuClose.addEventListener("click", () => {
  nav.style.right = "-50%";
  modeButton.style.display = "none";
});