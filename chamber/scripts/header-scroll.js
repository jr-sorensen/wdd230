document.addEventListener("scroll", function () {
    const h1 = document.querySelector("h1");
    const scrollPos = window.scrollY;

    // Adjust the transform property of h1 based on scroll position
    h1.style.transform = `translateY(${scrollPos * 0.5}px)`;
  });