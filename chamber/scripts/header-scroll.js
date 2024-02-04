document.addEventListener("scroll", function () {
    const h1 = document.querySelector("h1");
    const scrollPos = window.scrollY;

    
    h1.style.transform = `translateY(${scrollPos * 0.5}px)`;
  });