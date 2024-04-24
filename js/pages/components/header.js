export const makeHeader = () => {
  let header = document.querySelector("header");
//   header.className = "flex justify-center"

  let container = document.createElement("div");
  container.className = "flex between items-center";

  let logo = document.createElement("img");
  logo.src = "../pictures/Logo.png";

  let nav = document.createElement("nav");
  nav.className = "justify-evenly header-gap";

  let createPost = document.createElement("a");
  createPost.innerText = "+ Create Post";
  createPost.className = "headerText margin";

  let home = document.createElement("a");
  home.innerText = "Home";
  home.className = "headerText margin";

  let logIn = document.createElement("a");
  logIn.innerText = "Log In";
  logIn.className = "headerText margin";

  header.appendChild(container);
  container.append(logo, nav);
  nav.append(createPost, home, logIn);
};
