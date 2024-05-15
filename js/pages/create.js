import { makeHeader } from "../components/header.js";
import { makeFooter } from "../components/footer.js";
import { doFetch } from "../components/fetch.js";

const runPage = () => {
  makePage()
  makeHeader()
  makeFooter()
}


const makePage = () => {

  let main = document.querySelector("main");

  let container = document.createElement("div");
  container.className = "container";

  let imageBox = document.createElement("div");
  imageBox.className = "imagePreview";

  let headline = document.createElement("h1");
  headline.innerHTML = "Create Post";
  headline.className = "headerOne";

  main.appendChild(container);
  container.append(headline, imageBox);
  makeForms(container, imageBox);
};

const makeForms = (container, imageBox) => {
  let form = document.createElement("form");
  form.className = "flex flex-col items-center form";

  let imageFormBox = document.createElement("div");
  imageFormBox.className = "inputBox";

  let imageLabel = document.createElement("label");
  imageLabel.innerText = "Image URL:";
  imageLabel.className = "headerTwo";

  let imageInput = document.createElement("input");
  imageInput.type = "text";
  imageInput.id = "image";
  imageInput.name = "image"
  imageInput.className = "titleInput";

  imageInput.addEventListener("input", (event) => {
    const existingImagePreview = imageBox.querySelector('.postImage')
    if (existingImagePreview){
        existingImagePreview.remove()
    }
    if (imageInput.value.trim() !== "") {
      let imagePreview = document.createElement("img");
      imagePreview.src = imageInput.value;
      imagePreview.className = "postImage";
      imageBox.appendChild(imagePreview);
    } else {
      imagePreview.src = "#";
    }
  });

  let titleFormBox = document.createElement("div");
  titleFormBox.className = "inputBox";

  let titleLabel = document.createElement("label");
  titleLabel.innerHTML = "Title:";
  titleLabel.setAttribute("for", "title");
  titleLabel.className = "headerTwo";

  let titleInput = document.createElement("input");
  titleInput.className = "titleInput";
  titleInput.type = "text";
  titleInput.id = "title";
  titleInput.name = "title";
  titleInput.placeholder = "Insert text here.."

  let textFormBox = document.createElement("div");

  let textInput = document.createElement("textarea");
  textInput.className = "textInput";
  textInput.id = "text";
  textInput.name = "text";
  textInput.placeholder = "Add text here..";

  let submitButton = document.createElement("input");
  submitButton.type = "submit";
  submitButton.value = "Save";
  submitButton.className = "blueButton";

  let deleteButton = document.createElement("button");
  deleteButton.innerText = "Cancel";
  deleteButton.className = "smallBlueButton";

  container.append(form, deleteButton);
  form.append(imageFormBox, titleFormBox, textFormBox, submitButton);
  imageFormBox.append(imageLabel, imageInput);
  titleFormBox.append(titleLabel, titleInput);
  textFormBox.append(textInput);

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    let formData = new FormData(form);
    let postData = {
      title: formData.get("title"),
      body: formData.get("text"),
      media:{
        url: formData.get("image"),
        alt:"image"
      }
      // Add other form fields as needed
    };
    let userInfo = JSON.parse(localStorage.getItem("userInfo"))
      await doFetch("POST", "https://v2.api.noroff.dev/blog/posts/"+ userInfo.name, postData)
      window.location.href = "../index.html"
  });
};

runPage();
