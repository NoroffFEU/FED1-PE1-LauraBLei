export const makeHeader = () => {
  let isFrontPage = true;
  if (
    window.location.pathname.includes("post") ||
    window.location.pathname.includes("account")
  ) {
    isFrontPage = false;
  }
  let userInfo = JSON.parse(localStorage.getItem("userInfo"));

  desktopHeader(isFrontPage, userInfo);
  tabletHeader(isFrontPage, userInfo);
};

const desktopHeader = (isFrontPage, userInfo) => {
  let header = document.querySelector("header");

  let container = document.createElement("div");
  container.className = "flex between items-center desktopHeader";

  let logo = document.createElement("img");
  if (isFrontPage) {
    logo.src = "./public/Logo.png";
  } else {
    logo.src = "../public/Logo.png";
  }
  logo.className = "cursor logo";

  logo.addEventListener("click", () => {
    if (isFrontPage) {
      window.location.href = "index.html";
    } else {
      window.location.href = "../index.html";
    }
  });

  let nav = document.createElement("nav");
  nav.className = "justify-evenly header-gap flex";

  let createPost = document.createElement("a");
  createPost.innerText = "+ Create Post";
  if (isFrontPage) {
    createPost.href = "post/create.html";
  } else {
    createPost.href = "../post/create.html";
  }

  createPost.className = "headerText margin cursor";
  if (userInfo) {
    createPost.style.display = "block";
  } else {
    createPost.style.display = "none";
  }

  let home = document.createElement("a");
  home.innerText = "Home";
  home.className = "headerText margin cursor";
  if (isFrontPage) {
    home.href = "index.html";
  } else {
    home.href = "../index.html";
  }

  let logOut = document.createElement("button");
  logOut.innerText = "Log Out";
  logOut.className = "headerText margin cursor smallBlueButton";
  logOut.classList.add = "hidden";
  logOut.onclick = () => {
    localStorage.removeItem("userInfo");
    location.reload();
  };

  let logIn = document.createElement("a");
  logIn.innerText = "Login";
  logIn.classList.add = "visible";
  if (userInfo) {
    logIn.style.display = "none";
    logOut.style.display = "block";
  } else {
    logIn.style.display = "block";
    logOut.style.display = "none";
  }

  logIn.className = "headerText margin cursor";
  if (isFrontPage) {
    logIn.href = "account/login.html";
  } else {
    logIn.href = "../account/login.html";
  }

  header.appendChild(container);
  container.append(logo, nav);
  nav.append(createPost, home, logIn, logOut);
};

const tabletHeader = (isFrontPage, userInfo) => {
  let header = document.querySelector("header");

  let container = document.createElement("div");
  container.className = "flex between items-center tabletHeader";

  let logo = document.createElement("img");
  if (isFrontPage) {
    logo.src = "./public/Logo.png";
  } else {
    logo.src = "../public/Logo.png";
  }
  logo.className = "cursor logo";
  logo.addEventListener("click", () => {
    if (isFrontPage) {
      window.location.href = "index.html";
    } else {
      window.location.href = "../index.html";
    }
  });

  let details = document.createElement("details");

  let menuButton = document.createElement("summary");
  menuButton.className = "menuButton headerText list-style-none";

  let menuImg = document.createElement("img");
  if (isFrontPage) {
    menuImg.src = "./public/Menu.png";
  } else {
    menuImg.src = "../public/Menu.png";
  }

  let ul = document.createElement("ul");
  ul.className = "boxMenu flex justify-center items-center list-style-none position-absolute shadow z-index2 flex-wrap width-100";

  let createPost = document.createElement("a");
  createPost.innerText = "+ Create Post";
  createPost.className = "headerTwo marginBotTop styles-none";
  if (userInfo) {
    createPost.style.display = "block";
  } else {
    createPost.style.display = "none";
  }
  if (isFrontPage) {
    createPost.href = "post/create.html";
  } else {
    createPost.href = "../post/create.html";
  }

  let home = document.createElement("a");
  home.innerText = "Home";
  home.className = "headerTwo marginBotTop styles-none";
  if (isFrontPage) {
    home.href = "index.html";
  } else {
    home.href = "../index.html";
  }

  let logOut = document.createElement("button");
  logOut.innerText = "Log Out";
  logOut.className = "headerText margin cursor";
  logOut.className = "hidden smallBlueButton";
  logOut.onclick = () => {
    localStorage.removeItem("userInfo");
    location.reload();
  };

  let logIn = document.createElement("a");
  logIn.innerText = "Log In";
  logIn.className = "headerTwo marginBotTop cursor styles-none";
  if (isFrontPage) {
    logIn.href = "account/login.html";
  } else {
    logIn.href = "../account/login.html";
  }

  if (userInfo) {
    logIn.style.display = "none";
    logOut.style.display = "block";
  } else {
    logIn.style.display = "block";
    logOut.style.display = "none";
  }

  let aboutUs = document.createElement("a");
  aboutUs.innerText = "About Us";
  aboutUs.className = "headerTwo marginBotTop";

  let sponsers = document.createElement("a");
  sponsers.innerText = "Sponsers";
  sponsers.className = "headerTwo marginBotTop styles-none";

  header.appendChild(container);
  container.append(logo, details);
  details.append(menuButton, ul);
  menuButton.appendChild(menuImg);
  ul.append(home, aboutUs, sponsers, logIn, createPost, logOut);
};
