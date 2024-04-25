export const makeFooter = () => {
    desktopVersion()
    tabletVersion()
}

const desktopVersion = () => {
let footer = document.querySelector("footer")

let container = document.createElement("div")
container.className = "flex justify-evenly desktopFooter"

let informationBox = document.createElement("div")
informationBox.className = "flex flex-col marginBotTop items-center"

let information = document.createElement("h3")
information.innerText = "Information"
information.className = "headerText"

let contactUs = document.createElement("a")
contactUs.innerText = "Contact Us"
contactUs.className = "footerText"

let priacyPolicy = document.createElement("a")
priacyPolicy.innerText = "Privacy Policy"
priacyPolicy.className = "footerText"

let termsAndConditions = document.createElement("a")
termsAndConditions.innerText = "Terms And Conditions"
termsAndConditions.className = "footerText"

let logo = document.createElement("img")
logo.src = "../pictures/Logo.png"
logo.className = "footerLogo"

let aboutUsBox = document.createElement("div")
aboutUsBox.className = "flex flex-col marginBotTop items-center aboutUsBox"

let aboutUsHeadline = document.createElement("h3")
aboutUsHeadline.innerText = "About Us"
aboutUsHeadline.className = "headerText"


let sponsers = document.createElement("a")
sponsers.innerText = "Sponsers"
sponsers.className = "footerText"

let aboutUs = document.createElement("a")
aboutUs.innerText = "About Us"
aboutUs.className = "footerText"

footer.appendChild(container)
container.append(informationBox, logo, aboutUsBox)
informationBox.append(information, contactUs, priacyPolicy, termsAndConditions)
aboutUsBox.append(aboutUsHeadline, sponsers, aboutUs)

}

const tabletVersion = () => {

}