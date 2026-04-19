//Design by Johnny Nova
//https://dribbble.com/shots/7054548-Bractlet-Log-In

//Illustration by Katerina Limpitsouni
//https://undraw.co/

const loginButton = document.querySelector("button.log-in");
const form = document.querySelector("form.content-wrapper");

loginButton.addEventListener("click", (e) => {
  const x = e.clientX - e.target.offsetLeft;
  const y = e.clientY - e.target.offsetTop;

  const ink = document.createElement("span");

  ink.style.left = x + "px";
  ink.style.top = y + "px";
  ink.className = "ink";

  e.target.appendChild(ink);

  ink.addEventListener("webkitAnimationEnd", () => ink.remove());
});

form.addEventListener("submit", (e) => {
  const user = document.querySelector("input#user")
  const password = document.querySelector("input#password")
  
  e.preventDefault();
  
  [...e.target].map(val => {
    val.parentNode.classList.remove("caution")
    val.parentNode.classList.remove("warning")
    
    if (val.value.includes(" "))
      val.parentNode.classList.add("caution")
  })
  
  if (user.value != "testuser")
    user.parentNode.classList.add("warning")
  
  if (password.value != "mypassword")
    password.parentNode.classList.add("warning")
});
