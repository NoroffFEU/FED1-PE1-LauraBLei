import { doFetch } from "../components/fetch.js";

export const handleLogIn = () => {
    let form = document.getElementById("logInForm")

    form.addEventListener('submit', async(event) => {
        event.preventDefault();

        let formData = new FormData(form)
        let logInData = {
            email: formData.get("email"),
            password: formData.get("password")
        }

        console.log("formdata:", formData);
        console.log("log in data:", logInData);
        let response = await doFetch("POST", "https://v2.api.noroff.dev/auth/login",logInData)
        if(!response){
            alert("Your Email or Password is wrong.")
            return
        }
        console.log(response);

        localStorage.setItem("userInfo",JSON.stringify(response))
        window.location.href = "index.html"
    })

}