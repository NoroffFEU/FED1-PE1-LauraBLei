import { doFetch } from "./fetch.mjs";

export const handleRegistration = () => {
  const form = document.getElementById("registrationForm");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const registerData = {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
    };

    await doFetch(
      "POST",
      "https://v2.api.noroff.dev/auth/register",
      registerData
    );
    window.location.href = "./login.html";
  });
};
