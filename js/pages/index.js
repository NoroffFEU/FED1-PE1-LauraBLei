import { makeHeader } from "../components/header.js";
import { makeFooter } from "../components/footer.js";
import { doFetch } from "../components/fetch.js";

const runPage = () => {
  makePage();
  makeHeader();
  makeFooter();
};

const makePage = () => {
  let main = document.querySelector("main");

  let container = document.createElement("div");
  container.className = "container";

  let headlineContainerOne = document.createElement("div");
  headlineContainerOne.className = "headlineContainer flex justify-center";

  let recentPostsHeadline = document.createElement("h1");
  recentPostsHeadline.innerText = "Recent Posts";
  recentPostsHeadline.className = "headerOne";

  let carouselDiv = document.createElement("div");

  let headlineContainerTwo = document.createElement("div");
  headlineContainerTwo.className = "headlineContainer flex justify-center";

  let allPostsHeadline = document.createElement("h1");
  allPostsHeadline.innerText = "Blog Posts";
  allPostsHeadline.className = "headerOne";

  let blogPostGrid = document.createElement("div");

  main.appendChild(container);
  container.append(
    headlineContainerOne,
    carouselDiv,
    headlineContainerTwo,
    blogPostGrid
  );
  headlineContainerOne.appendChild(recentPostsHeadline);
  headlineContainerTwo.appendChild(allPostsHeadline);

  makeBlogPostGrid(blogPostGrid)
};

const makeBlogPostGrid = async (container) => {
    // let blogs = await fetchBlogs()
    const blogs = await doFetch("GET")
    blogs.sort((a,b) => new Date(b.created) - new Date(a.created))
  console.log(blogs);
    blogs.forEach(blog => {
        let imageBox = document.createElement("div")
        imageBox.className = "postImageBox flex justify-center items-center"

        let image = document.createElement("img")
        image.src = blog.media.url;
        image.alt = "blog Image"
        image.className = "postGridImage cursor"
        image.addEventListener("click", () => {
            window.location.href = "/post/index.html?" + blog.id
        })

        let title = document.createElement("h2")
        title.innerText = blog.title
        title.className = "headerTwo imageTitle cursor"

        container.appendChild(imageBox)
        imageBox.append(image, title)
    });

    console.log(blogs);
};


runPage();
