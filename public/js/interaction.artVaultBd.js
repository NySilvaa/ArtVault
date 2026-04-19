const goBackWebsite = ()=>{
    const btnBackToStart = document.querySelector(".btnBackStart");

    window.addEventListener("scroll", ()=>{
        let windowScroll = window.scrollY.toFixed(2);

        btnBackToStart.style.opacity = (windowScroll > 3400) ? 1 : 0;
    });

    btnBackToStart.addEventListener("click", ()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
};

goBackWebsite();