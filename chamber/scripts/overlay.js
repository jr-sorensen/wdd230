
  const overlays = document.querySelectorAll('.overlay');


  function updateOverlayVisibility() {
    overlays.forEach(overlay => {
      const isVisible = window.getComputedStyle(overlay).display !== 'none';
      overlay.style.display = isVisible ? 'block' : 'none';
    });
  }


  window.addEventListener('resize', updateOverlayVisibility);


  window.addEventListener('load', updateOverlayVisibility);

