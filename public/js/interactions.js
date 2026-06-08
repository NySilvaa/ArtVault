// FUNÇÃO DO MOUSE
window.addEventListener("mousemove", (e) => {
  gsap.set(".cursorDot", {
    x: e.clientX,
    y: e.clientY
  });

  gsap.to(".cursorOutline", {
    x: e.clientX,
    y: e.clientY,
    duration: 0.5,
    ease: "power2.out"
  });
});