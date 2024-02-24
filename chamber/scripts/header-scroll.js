document.addEventListener("scroll", function () {
  const h1 = document.querySelector(".hero h1");
  const scrollPos = window.scrollY;

  if (h1) {
      h1.style.transform = `translateY(${scrollPos * 0.5}px)`;
  }
});