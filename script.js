// SHOW ON LOAD FUNCTION

const upperSection = document.querySelector(".upper-section");
const navBar = document.querySelector(".navbar");

function myFunction() {
  upperSection.style.opacity = "1";
  upperSection.style.transition = "1.5s";
  navBar.style.opacity = "1";
  navBar.style.transition = "1.5s";
}

myFunction();

// SLIDE IN FUNCTION

const slideIn = document.querySelector(".slide-in");

window.addEventListener("scroll", () => {
  const { scrollTop, clientHeight } = document.documentElement;

  //console.log(scrollTop, clientHeight);

  const topElementToTopViewport = slideIn.getBoundingClientRect().top;

  if (
    scrollTop >
    (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 1.2
  ) {
    slideIn.classList.add("active");
  }
});

// FUNCTION FOR PROJECTS, COME IN LEFT AND RIGHT