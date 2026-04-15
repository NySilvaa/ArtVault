const menu = document.querySelector(".staggered-menu-panel");
const btnMenu = document.querySelector(".sm-toggle")
let menuAttr = menu.getAttribute("aria-hidden");

document.addEventListener("click", ()=>{
  if(!menuAttr){
    menu.style.display = "none";
    menuAttr = true;
  }else{
    menu.style.display = "block";
    menuAttr = false;
  }
});

menu.addEventListener("click", (e)=>{e.stopPropagation()});

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

// FUNÇÃO DA APARIÇÃO DAS DESCRIÇÕES
const descImgFirstSection = document.querySelector(".description-img-first");
const descImgSecondSection = document.querySelector(".description-img-second");

const itemsMenu = document.querySelectorAll(".items-menu a");

itemsMenu.forEach(element =>{
  element.addEventListener("click", ()=>{
    if(element.getAttribute("href") == "#"){
      const numberDesc = element.getAttribute("numberDesc");
        menu.style.width = "0";
        menu.style.opacity = 0;

      switch (numberDesc) {
        case "1st":
            // PRIMEIRA SEÇÃO
            descImgFirstSection.style.width = "auto";
            descImgFirstSection.style.opacity = 1;

            // SEGUNDA SEÇÃO
            descImgSecondSection.style.width = "0";
            descImgSecondSection.style.opacity = 0;
          break;

        case "2nd":
            // PRIMEIRA SEÇÃO
            descImgFirstSection.style.width = "0";
            descImgFirstSection.style.opacity = 0;

            // SEGUNDA SEÇÃO
            descImgSecondSection.style.width = "auto";
            descImgSecondSection.style.opacity = 1;
          break;
      
        default:
          break;
      }
    }
  })
});