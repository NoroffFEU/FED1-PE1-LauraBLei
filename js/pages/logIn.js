import { makeHeader } from "../components/header.mjs";
import { makeFooter } from "../components/footer.mjs";
import { handleLogIn } from "../components/handleLogin.mjs";

const runPage = () => {
    makePage()
    makeHeader()
    makeFooter()
    handleLogIn()
}

const makePage = () => {
    let main = document.querySelector("main")

    let container = document.createElement("div")
    container.className = "container"

    let h1 = document.createElement("h1")
    h1.innerText = "Login"
    h1.className = "headerOne"

    let form = document.createElement("form")
    form.className = "form flex flex-col items-center"
    form.id = "logInForm"


    let email = document.createElement("input")
    email.type = "email"
    email.id = "email"
    email.name = "email"
    email.placeholder = "email"
    email.className = "headerTwo loginForms"
    email.required = true
    email.autocomplete = "email"

    let password = document.createElement("input")
    password.type = "password"
    password.id = "password"
    password.name ="password"
    password.placeholder = "Password"
    password.className = "headerTwo loginForms"
    password.autocomplete = "current-password"
    password.required = true
    
    let button = document.createElement("button")
    button.type = "submit"
    button.innerText = "Log In"
    button.className = "brownButton"

    let registerButton = document.createElement("a")
    registerButton.innerText = "Register"
    registerButton.className = "alternativeHeadline styles-none"
    registerButton.href =  "./register.html"

    main.appendChild(container)
    container.append(h1, form)
    form.append(email, password, button, registerButton)
}

runPage()