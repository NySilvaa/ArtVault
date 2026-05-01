const changeFeaturesLoginAndSignUp = ()=>{
  const url = window.location.href.split("/");
  const pageCurrent = url[url.length-1];
  let btn = "";

if(pageCurrent == "LogIn")
  btn = document.querySelector("button.logIn");
 else if(pageCurrent == "SignUp")
  btn = document.querySelector("button.signUp");


  if(btn !== null || btn !== ""){
    btn.addEventListener("click", (e) => {
  const x = e.clientX - e.target.offsetLeft;
  const y = e.clientY - e.target.offsetTop;

  const ink = document.createElement("span");

  ink.style.left = x + "px";
  ink.style.top = y + "px";
  ink.className = "ink";

  e.target.appendChild(ink);

  ink.addEventListener("webkitAnimationEnd", () => ink.remove());
});
  }

}

changeFeaturesLoginAndSignUp();