const sections = document.querySelectorAll(".section");
const sectBtns = document.querySelectorAll(".controlls");
const sectBtn = document.querySelectorAll(".control");
const allSections = document.querySelector(".main-content");

console.log(sectBtn);

const PageTransitions = () => {
  // Button Active
  for (let i = 0; i < sectBtn.length; i++) {
    sectBtn[i].addEventListener("click", function () {
      // Set current active button to be non-active
      let currentActiveBtn = document.querySelectorAll(".active-btn");
      currentActiveBtn[0].className = currentActiveBtn[0].className.replace(
        "active-btn",
        ""
      );
      // Set active button for the button clicked
      // "this keyword dose not exist in arrow function"
      this.className += " active-btn";
    });
  }

  // Section Active
  allSections.addEventListener("click", (e) => {
    const id = e.target.dataset.id;
    if (id) {
      sectBtns.forEach((btn) => {
        btn.classList.remove("active");
      });
      e.target.classList.add("active");

      // Hide other sections
      sections.forEach((section) => {
        section.classList.remove("active");
      });

      const element = document.getElementById(id);
      element.classList.add("active");
    }
  });
};

PageTransitions();
