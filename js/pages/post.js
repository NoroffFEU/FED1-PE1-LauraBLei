import { makeHeader } from "../components/header.js";
import { makeFooter } from "../components/footer.js";
import { doFetch } from "../components/fetch.js";

const runPage = () => {
  makePage();
  makeHeader();
  makeFooter();
};

const makePage = async () => {
  const id = window.location.search.slice(1)
  const months = ["January", "February","March","April","June","July","August","September","October","November","December"]
  let blog = await doFetch("GET", "https://v2.api.noroff.dev/blog/posts/Tompe/"+id)

  let main = document.querySelector("main");

  let container = document.createElement("div");
  container.className = "container";

  let imageBox = document.createElement("div");
  imageBox.className = "postImageContainer"

  let postImage = document.createElement("img");
  postImage.className = "postImage"
  postImage.src = blog.media.url

  let editButton = document.createElement("button");
  editButton.innerText = "Edit";
  editButton.className = "smallBrownButton position-right";
  if(localStorage.getItem("userInfo")){
    editButton.style.display = "block"
  }else{
    editButton.style.display = "none"
  }
  editButton.onclick = () => {
    window.location.href = "edit.html" + "?" + id
}

  let postTitle = document.createElement("h1");
  postTitle.innerText = blog.title;
  postTitle.className = "headerOne";

  let textContainer = document.createElement("div");
  textContainer.className = "flex flex-col gap10 textBox"

  let tagContainer = document.createElement("div")
  tagContainer.className = "flex gap10"

  let tagText = document.createElement("p")
  tagText.innerText = "Tags:"

  let tags = document.createElement("p")
  tags.innerText = blog.tags

  let authorContainer = document.createElement("div");
  authorContainer.className = "flex gap10"

  let authorText = document.createElement("p");
  authorText.innerText = "Author:";

  let author = document.createElement("p");
  author.innerText = blog.author.name;

  let publicationContainer = document.createElement("div");
  publicationContainer.className = "flex gap10"

  let publicationDateText = document.createElement("p");
  publicationDateText.innerText = "Publication date:";

  let publicationDate = document.createElement("p");
  let formattedDate= new Date(blog.created)
  publicationDate.innerText = `${formattedDate.getDate()} ${months[formattedDate.getMonth()]} ${formattedDate.getFullYear()}`;

  let postText = document.createElement("p");
  postText.innerText = blog.body
    

  main.appendChild(container);
  container.append(imageBox, editButton, postTitle, textContainer);
  imageBox.appendChild(postImage);
  textContainer.append(tagContainer, authorContainer, publicationContainer, postText);
  tagContainer.append(tagText, tags)
  authorContainer.append(authorText, author);
  publicationContainer.append(publicationDateText, publicationDate);
};

runPage();
