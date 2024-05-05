export const makeHeader = () => {
  let isFrontPage = true
  desktopHeader(isFrontPage);
  tabletHeader(isFrontPage);
};

const desktopHeader = (isFrontPage) => {
  
  if(window.location.pathname.includes("post")||window.location.pathname.includes("account")) {
    isFrontPage = false
  }
  let userInfo = JSON.parse(localStorage.getItem("userInfo"));

  let header = document.querySelector("header");

  let container = document.createElement("div");
  container.className = "flex between items-center desktopHeader";

  let logo = document.createElement("img");
  if(isFrontPage){
    logo.src = "./public/Logo.png";
  }else{
    logo.src = "../public/Logo.png";

  }
  logo.className = "cursor";
  logo.addEventListener('click', () => window.location.href = "/index.html")

  let nav = document.createElement("nav");
  nav.className = "justify-evenly header-gap flex";

  let createPost = document.createElement("a");
  createPost.innerText = "+ Create Post";
  if(isFrontPage){
    createPost.href = "post/create.html"
  }else{
    createPost.href = "../post/create.html"
  }


  createPost.className = "headerText margin cursor";
  if(userInfo){
    createPost.style.display = "block"
  }else {
    createPost.style.display = "none"
  }

  let home = document.createElement("a");
  home.innerText = "Home";
  home.className = "headerText margin cursor";
  if(isFrontPage){
    home.href =  "index.html";
  }else{
    home.href =  "../index.html";
  }


  let logOut = document.createElement("button");
  logOut.innerText = "Log Out";
  logOut.className = "headerText margin cursor"
  logOut.classList.add = "hidden"
  logOut.onclick = () => {
    localStorage.removeItem("userInfo")
    location.reload()
  }

  let logIn = document.createElement("a");
  logIn.innerText = "Log In"
  logIn.classList.add = "visible"
  if (userInfo) {
    logIn.style.display = "none"
    logOut.style.display = "block"
    } else {
    logIn.style.display = "block"
    logOut.style.display = "none"
  }

  logIn.className = "headerText margin cursor";
  if(isFrontPage){
    logIn.href = "account/login.html";
  }else{
    logIn.href = "../account/login.html";
  }

  header.appendChild(container);
  container.append(logo, nav);
  nav.append(createPost, home, logIn, logOut);
};

const tabletHeader = (isFrontPage) => {
  let header = document.querySelector("header");

  let container = document.createElement("div");
  container.className = "flex between items-center tabletHeader";

  let logo = document.createElement("img");
  if(isFrontPage){
    logo.src = "./pictures/Logo.png";
  }else{
    logo.src = "../pictures/Logo.png";
  }
  logo.className = "cursor";

  let details = document.createElement("details");

  let menuButton = document.createElement("summary");
  menuButton.className = "menuButton headerText";

  let menuImg = document.createElement("img");
  menuImg.src = "./pictures/Menu.png";

  let ul = document.createElement("ul");
  ul.className = "boxMenu";

  let createPost = document.createElement("li");
  createPost.innerText = "+ Create Post";
  createPost.className = "headerTwo marginBotTop";

  let home = document.createElement("li");
  home.innerText = "Home";
  home.className = "headerTwo marginBotTop";

  let logIn = document.createElement("li");
  logIn.innerText = "Log In";
  logIn.className = "headerTwo marginBotTop";

  let aboutUs = document.createElement("li");
  aboutUs.innerText = "About Us";
  aboutUs.className = "headerTwo marginBotTop";

  let sponsers = document.createElement("li");
  sponsers.innerText = "Sponsers";
  sponsers.className = "headerTwo marginBotTop";

  header.appendChild(container);
  container.append(logo, details);
  details.append(menuButton, ul);
  menuButton.appendChild(menuImg);
  ul.append(home, aboutUs, sponsers, logIn, createPost);
};
