import { makeHeader } from "../components/header.js";
import { makeFooter } from "../components/footer.js";
import { doFetch } from "../components/fetch.js";

const runPage = async() => {
    const id = window.location.search.slice(1)
    let blog = await doFetch("GET", "https://v2.api.noroff.dev/blog/posts/Tompe/"+id)
    console.log("blog",blog);
  makePage(blog, id)
  makeHeader()
  makeFooter()
}


const makePage = (blog, id) => {

  let main = document.querySelector("main");

  let container = document.createElement("div");
  container.className = "container";

  let imageBox = document.createElement("div");
  imageBox.className = "postImageContainer";

  let headline = document.createElement("h1");
  headline.innerHTML = "Edit Post";
  headline.className = "headerOne";

  main.appendChild(container);
  container.append(headline, imageBox);
  makeForms(container, imageBox, blog, id);
};

const makeForms = (container, imageBox, blog, id) => {
    
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
  imageInput.placeholder = "insert image URL here.."
  imageInput.defaultValue = blog.media.url
  const imageInputEvent = (event) => {
    const existingImagePreview = imageBox.querySelector('.postImage')
    if (existingImagePreview){
        existingImagePreview.remove()
    }
      if (imageInput.value.trim() !== "") {
        let imagePreview = document.createElement("img");
        imagePreview.src = imageInput.value;
        imagePreview.className = "postImage";
        imagePreview.id = "imagePreview"
        imageBox.appendChild(imagePreview);
      } else {
        imagePreview.src = "#";
      }
    }
    imageInputEvent()
  
  imageInput.addEventListener("input", imageInputEvent);

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
  titleInput.defaultValue = blog.title

  let textFormBox = document.createElement("div");

  let textInput = document.createElement("textarea");
  textInput.className = "textInput";
  textInput.id = "text";
  textInput.name = "text";
  textInput.placeholder = "Add text here..";
  textInput.defaultValue = blog.body

  let submitButton = document.createElement("input");
  submitButton.type = "submit";
  submitButton.value = "Save";
  submitButton.className = "blueButton";

  let deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.className = "smallBlueButton";
  deleteButton.onclick = () => {
        let userInfo = JSON.parse(localStorage.getItem("userInfo"))
        const result = window.confirm("Are you sure you want to delete this?")
        if(result){
            doFetch("DELETE","https://v2.api.noroff.dev/blog/posts/"+ userInfo.name +"/"+id)
            window.location.href = "../index.html"
        }
  }

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
    
        await doFetch("PUT", "https://v2.api.noroff.dev/blog/posts/"+ userInfo.name +"/"+id, postData)
    

    window.location.href = "index.html?" + id
    
  });
};


runPage();