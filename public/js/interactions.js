// 1. FUNÇÃO DO MOUSE (Seu código original)
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

  const sections = document.querySelectorAll("section");

  const observerOptions = {
    root: null,
    threshold: 0.2
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const className = entry.target.className || "";
        const isDarkBackground = className.includes("bg");

        if (isDarkBackground) {
          gsap.to(".cursorDot", { backgroundColor: "#ffffff", duration: 0.3 });
          gsap.to(".cursorOutline", { 
            backgroundColor: "rgba(255, 255, 255, 0.3)", 
            borderColor: "rgba(255, 255, 255, 0.5)", 
            duration: 0.3 
          });
        } else {
          gsap.to(".cursorDot", { backgroundColor: "rgb(33, 43, 70)", duration: 0.3 });
          gsap.to(".cursorOutline", { 
            backgroundColor: "rgba(36, 51, 92, 0.2)", 
            borderColor: "rgba(36, 51, 92, 0.4)", 
            duration: 0.3 
          });
        }
      }
    });
  }, observerOptions);

  sections.forEach((section) => {
    observer.observe(section);
  });