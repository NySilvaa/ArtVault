const btnMenu = document.querySelector(".btn-menu");
const btnClose = document.querySelector(".btn-close");
const menu = document.querySelector(".menu");

btnMenu.addEventListener("click", ()=>{
    menu.style.width = "100%";
    menu.style.opacity = 1;
});

btnClose.addEventListener("click", ()=>{
    menu.style.width = "0"
    menu.style.opacity = 0;
});

// Movimentação do ponto central (imediata)
window.addEventListener("mousemove", (e) => {
  gsap.set(".cursor-dot", {
    x: e.clientX,
    y: e.clientY
  });

  // Movimentação do círculo externo (com suavidade/delay)
  gsap.to(".cursor-outline", {
    x: e.clientX,
    y: e.clientY,
    duration: 0.5,
    ease: "power2.out"
  });
});