import { doFetch } from "./js/components/fetch.js";

export const handleRegistration = () => {
    let form = document.getElementById("registrationForm")

    form.addEventListener('submit', async(event) => {
        event.preventDefault();

        let formData = new FormData(form)
        let registerData = {
            name: formData.get("name"),
            email: formData.get("email"),
            password: formData.get("password")
        }

        await doFetch("POST", "https://v2.api.noroff.dev/auth/register", registerData)
    })
}