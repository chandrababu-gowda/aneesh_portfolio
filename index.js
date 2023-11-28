const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show--animation");
    } else {
      entry.target.classList.remove("show--animation");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden--animation");
hiddenElements.forEach((el) => {
  observer.observe(el);
});

const blurDivs = document.querySelectorAll(".blur-load");
blurDivs.forEach((div) => {
  const img = document.querySelector("img");

  function loaded() {
    div.classList.add("loaded");
  }

  if (img.complete) {
    loaded();
  } else {
    img.addEventListener("load", loaded);
  }
});
