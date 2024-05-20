export const makeFooter = () => {
  const isFrontPage =
    window.location.pathname.includes("post") ||
    window.location.pathname.includes("account");
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

  const contactUs = document.createElement("a");
  contactUs.innerText = "Contact Us";
  contactUs.className = "footerText";

  const priacyPolicy = document.createElement("a");
  priacyPolicy.innerText = "Privacy Policy";
  priacyPolicy.className = "footerText";

  const termsAndConditions = document.createElement("a");
  termsAndConditions.innerText = "Terms And Conditions";
  termsAndConditions.className = "footerText";

  const logo = document.createElement("img");
  if (isFrontPage) {
    logo.src = "./public/Logo.png";
  } else {
    logo.src = "../public/Logo.png";
  }
  logo.className = "logo footerLogo";
  logo.alt = "logo"

  const aboutUsBox = document.createElement("div");
  aboutUsBox.className = "flex flex-col marginBotTop items-center aboutUsBox";

  const aboutUsHeadline = document.createElement("h3");
  aboutUsHeadline.innerText = "About Us";
  aboutUsHeadline.className = "headerText";

  const sponsers = document.createElement("a");
  sponsers.innerText = "Sponsers";
  sponsers.className = "footerText";

  const aboutUs = document.createElement("a");
  aboutUs.innerText = "About Us";
  aboutUs.className = "footerText";

  footer.appendChild(container);
  container.append(informationBox, logo, aboutUsBox);
  informationBox.append(
    information,
    contactUs,
    priacyPolicy,
    termsAndConditions
  );
  aboutUsBox.append(aboutUsHeadline, sponsers, aboutUs);
};

const tabletVersion = () => {};
