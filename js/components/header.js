export const makeHeader = () => {
  desktopHeader()
  tabletHeader()
  
};


const desktopHeader = () => {
  let header = document.querySelector("header");

  let container = document.createElement("div");
  container.className = "flex between items-center desktopHeader";

  let logo = document.createElement("img");
  logo.src = "../pictures/Logo.png";
  logo.className = "cursor";

  let nav = document.createElement("nav");
  nav.className = "justify-evenly header-gap";

  let createPost = document.createElement("a");
  createPost.innerText = "+ Create Post";
  createPost.className = "headerText margin cursor";

  let home = document.createElement("a");
  home.innerText = "Home";
  home.className = "headerText margin cursor";

  let logIn = document.createElement("a");
  logIn.innerText = "Log In";
  logIn.className = "headerText margin cursor";

  header.appendChild(container);
  container.append(logo, nav);
  nav.append(createPost, home, logIn);
};

const tabletHeader = () => {
  let header = document.querySelector("header");

  let container = document.createElement("div");
  container.className = "flex between items-center tabletHeader";

  let logo = document.createElement("img");
  logo.src = "../pictures/Logo.png";
  logo.className = "cursor";

  let details = document.createElement("details")

  let menuButton = document.createElement("summary")
  menuButton.className = "menuButton headerText"

  let menuImg = document.createElement("img")
  menuImg.src = "../pictures/Menu.png"

  let ul = document.createElement("ul")
  ul.className = "boxMenu"

  let createPost = document.createElement("li")
  createPost.innerText = "+ Create Post"
  createPost.className = "headerTwo marginBotTop"

  let home = document.createElement("li")
  home.innerText = "Home"
  home.className = "headerTwo marginBotTop"

  let logIn = document.createElement("li")
  logIn.innerText = "Log In"
  logIn.className = "headerTwo marginBotTop"

  let aboutUs = document.createElement("li")
  aboutUs.innerText = "About Us"
  aboutUs.className = "headerTwo marginBotTop"

  let sponsers = document.createElement("li")
  sponsers.innerText = "Sponsers"
  sponsers.className = "headerTwo marginBotTop"


  header.appendChild(container);
  container.append(logo, details);
  details.append(menuButton, ul)
  menuButton.appendChild(menuImg)
  ul.append(home, aboutUs, sponsers, logIn, createPost);
};
