import { makeHeader } from "../components/header.js";
import { makeFooter } from "../components/footer.js";

const runPage = () => {
    makePage()
    makeHeader()
    makeFooter()
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

    let email = document.createElement("input")
    email.type = "email"
    email.id = "email"
    email.placeholder = "email"
    email.className = "headerTwo loginForms"

    let username = document.createElement("input")
    username.type = "text"
    username.id = "username"
    username.placeholder = "Username"
    username.className = "headerTwo loginForms"

    let password = document.createElement("input")
    password.type = "password"
    password.id = "password"
    password.placeholder = "Password"
    password.className = "headerTwo loginForms"
    
    let button = document.createElement("button")
    button.type = "submit"
    button.innerText = "Log In"
    button.className = "brownButton"

    let registerButton = document.createElement("a")
    registerButton.innerText = "Log in"
    registerButton.className = "alternativeHeadline"

    main.appendChild(container)
    container.append(h1, form)
    form.append(email, username, password, button, registerButton)
}

runPage()