const btnMenu = document.querySelector(".hamburguer input");
const lineBtnMenu = document.querySelectorAll(".line");
const menuHome = document.querySelector(".menu");
let control = true

btnMenu.addEventListener("click", ()=>{

    if(control){
        menuHome.style.width = "750px"
        menuHome.style.opacity = "1"
        lineBtnMenu[0].style.stroke = "#f00"
        lineBtnMenu[1].style.stroke = "#f00"
        control = false
    }else{
        menuHome.style.width = "0"
        menuHome.style.opacity = "0"
        lineBtnMenu[0].style.stroke = "#fff"
        lineBtnMenu[1].style.stroke = "#fff"
        control = true
    }
    
})

// FUNÇÃO DA APARIÇÃO DAS DESCRIÇÕES
const descImgFirstSection = document.querySelector(".descriptionImg_first");
const descImgSecondSection = document.querySelector(".descriptionImg_second");

const itemsMenu = document.querySelectorAll(".menu a");
itemsMenu.forEach(element =>{

  element.addEventListener("click", ()=>{
    if(element.getAttribute("href") == "#"){
        menuHome.style.width = "0"
        menuHome.style.opacity = "0"
        lineBtnMenu[0].style.stroke = "#fff"
        lineBtnMenu[1].style.stroke = "#fff"
        control = true

      const numberDesc = element.getAttribute("data-index");

      switch (numberDesc) {
        case "1":
            // PRIMEIRA SEÇÃO
            descImgFirstSection.style.width = "auto";
            descImgFirstSection.style.opacity = 1;

            // SEGUNDA SEÇÃO
            descImgSecondSection.style.width = "0";
            descImgSecondSection.style.opacity = 0;
          break;

        case "2":
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