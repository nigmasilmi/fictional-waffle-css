const selectPlanBtns = document.querySelectorAll(".plan button");

const backdrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");

const toggleSideBarBtn = document.querySelector(".toggle-button");
const mobileNav = document.querySelector(".mobile-nav");

const ctaBtn = document.querySelector(".main-nav__item--cta");

for (let i = 0; i < selectPlanBtns.length; i++) {
  selectPlanBtns[i].addEventListener("click", function () {
    backdrop.style.display = "block";
    setTimeout(() => {
      backdrop.classList.add("open");
    }, 10);
    modal.classList.add("open");
  });
}

// Closing modal when clicking in "No!" button
const noBtn = document.querySelector("button.modal__action--negative");
if (noBtn) {
  noBtn.addEventListener("click", function () {
    backdrop.style.display = "block";
    modal.classList.remove("open");
    setTimeout(() => {
      backdrop.classList.remove("open");
    }, 10);
  });
}

// Closing modal when clicking on backdrop
backdrop.addEventListener("click", function () {
  if (modal) {
    modal.classList.remove("open");
  }
  backdrop.classList.remove("open");
  setTimeout(() => {
    backdrop.style.display = "none";
  }, 200);
  mobileNav.classList.remove("open");
});

toggleSideBarBtn.addEventListener("click", function () {
  backdrop.classList.add("open");
  mobileNav.classList.add("open");
});

ctaBtn.addEventListener("animationstart", function (event) {
  console.log("animation STARTED", event);
});
ctaBtn.addEventListener("animationiteration", function (event) {
  console.log("ITERATED", event);
});
ctaBtn.addEventListener("animationend", function (event) {
  console.log("animation ENDED", event);
});
