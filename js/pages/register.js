import { makeHeader } from "../components/header.js";
import { makeFooter } from "../components/footer.js";
import { handleRegistration } from "../components/handleRegistration.js";

const runPage = () => {
    makePage()
    makeHeader()
    makeFooter()
    handleRegistration()
}

const makePage = () => {
    let main = document.querySelector("main")

    let container = document.createElement("div")
    container.className = "container"

    let h1 = document.createElement("h1")
    h1.innerText = "Register"
    h1.className = "headerOne"

    let form = document.createElement("form")
    form.className = "form flex flex-col items-center"
    form.id = "registrationForm"

    let email = document.createElement("input")
    email.type = "email"
    email.id = "email"
    email.name = "email"
    email.placeholder = "email"
    email.className = "headerTwo loginForms"
    email.required = true

    let username = document.createElement("input")
    username.type = "text"
    username.name = "name"
    username.id = "username"
    username.placeholder = "Username"
    username.className = "headerTwo loginForms"
    username.autocomplete = "username"
    username.required = true

    let password = document.createElement("input")
    password.type = "password"
    password.id = "password"
    password.name = "password"
    password.placeholder = "Password"
    password.className = "headerTwo loginForms"
    password.autocomplete = "current-password"
    password.required = true
    
    let button = document.createElement("button")
    button.type = "submit"
    button.innerText = "Register"
    button.className = "brownButton"

    let logInButton = document.createElement("a")
    logInButton.innerText = "Log in"
    logInButton.className = "alternativeHeadline"
    logInButton.href = window.location.origin + "/account/login.html"

    main.appendChild(container)
    container.append(h1, form)
    form.append(email, username, password, button, logInButton)
}

runPage()