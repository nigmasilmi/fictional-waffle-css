const selectPlanBtns = document.querySelectorAll(".plan button");

const backdrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");

const toggleSideBarBtn = document.querySelector(".toggle-button");
const mobileNav = document.querySelector(".mobile-nav");

for (let i = 0; i < selectPlanBtns.length; i++) {
  selectPlanBtns[i].addEventListener("click", function () {
    // backdrop.style.display = "block";
    // modal.style.display = "block";
    backdrop.classList.add("open");
    modal.classList.add("open");
  });
}

// Closing modal when clicking in "No!" button
const noBtn = document.querySelector("button.modal__action--negative");
if (noBtn) {
  noBtn.addEventListener("click", function () {
    //   backdrop.style.display = "none";
    //   modal.style.display = "none";
    backdrop.classList.remove("open");
    modal.classList.remove("open");
  });
}

// Closing modal when clicking on backdrop
backdrop.addEventListener("click", function () {
  //   backdrop.style.display = "none";
  //   modal.style.display = "none";
  //   mobileNav.style.display = "none";
  backdrop.classList.remove("open");
  if (modal) {
    modal.classList.remove("open");
  }
  mobileNav.classList.remove("open");
});

toggleSideBarBtn.addEventListener("click", function () {
  //   mobileNav.style.display = "block";
  //   backdrop.style.display = "block";

  backdrop.classList.add("open");
  mobileNav.classList.add("open");
});
