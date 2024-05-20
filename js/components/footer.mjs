export const makeFooter = () => {
  const isFrontPage = !(
    window.location.pathname.includes("post") ||
    window.location.pathname.includes("account")||
    window.location.pathname.includes("about")
  );

  desktopVersion(isFrontPage);
  tabletVersion(isFrontPage);
};

const desktopVersion = (isFrontPage) => {
  const footer = document.querySelector("footer");

  const container = document.createElement("div");
  container.className = "flex justify-evenly desktopFooter";

  const informationBox = document.createElement("div");
  informationBox.className = "flex flex-col marginBotTop items-center";

  const information = document.createElement("h3");
  information.innerText = "Information";
  information.className = "headerText";

  const instagram = document.createElement("a");
  instagram.innerText = "Instagram";
  instagram.className = "footerText styles-none cursor";
  instagram.href = "https://www.instagram.com/marley_the_dog_dk/";
  instagram.target = "_blank"

  const tikTok = document.createElement("a");
  tikTok.innerText = "Tik Tok";
  tikTok.className = "footerText styles-none cursor";
  tikTok.href = "https://www.tiktok.com/@marley_the_dog_no";
  tikTok.target = "_blank"

  const logo = document.createElement("img");
  if (isFrontPage) {
    logo.src = "./public/Logo.png";
  } else {
    logo.src = "../public/Logo.png";
  }
  logo.className = "logo footerLogo";
  logo.alt = "logo";

  const aboutUsBox = document.createElement("div");
  aboutUsBox.className = "flex flex-col marginBotTop items-center aboutUsBox";

  const aboutUsHeadline = document.createElement("h3");
  aboutUsHeadline.innerText = "About Us";
  aboutUsHeadline.className = "headerText";

  const aboutUs = document.createElement("a");
  aboutUs.innerText = "About Us";
  aboutUs.className = "footerText styles-none cursor";
  if (isFrontPage) {
    aboutUs.href = "./about/marley.html";
  } else {
    aboutUs.href = "../about/marley.html";
  }

  footer.appendChild(container);
  container.append(informationBox, logo, aboutUsBox);
  informationBox.append(information, instagram, tikTok);
  aboutUsBox.append(aboutUsHeadline, aboutUs);
};

const tabletVersion = () => {};
