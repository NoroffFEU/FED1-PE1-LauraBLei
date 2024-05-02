import { makeHeader } from "../components/header.js";
import { makeFooter } from "../components/footer.js";
import { doFetch } from "../components/fetch.js";
import { carousel } from "../components/carousel.js";

const runPage = async () => {
  const blogs = await doFetch("GET","https://v2.api.noroff.dev/blog/posts/Tompe");
  makePage(blogs);
  makeHeader();
  makeFooter();
};

const makePage = (blogs) => {
  let main = document.querySelector("main");

  let container = document.createElement("div");
  container.className = "container";

  let headlineContainerOne = document.createElement("div");
  headlineContainerOne.className = "headlineContainer flex justify-center";

  let recentPostsHeadline = document.createElement("h1");
  recentPostsHeadline.innerText = "Recent Posts";
  recentPostsHeadline.className = "headerOne";

  let carouselDiv = document.createElement("div");
  carouselDiv.className =
    "flex flex-col justify-center items-center marginBotTop";

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

  makeCarousel(carouselDiv,blogs);
  makeBlogPostGrid(blogPostGrid, blogs);
};

const makeCarousel = async (carouselDiv, blogs) => {

  const latestPosts = blogs.slice(0, 3);

  let leftButton = document.createElement("img");
  leftButton.src = "./public/Left.png";
  leftButton.id = "prevBtn";
  leftButton.className = "carouselButtons position-left cursor prevBtn";

  let rightButton = document.createElement("img");
  rightButton.src = "./public/Right.png";
  rightButton.id = "nextBtn";
  rightButton.className = "carouselButtons position-right cursor nextBtn";

  let dots = document.createElement("div");
  dots.id = "slide-indicators";
  dots.className = "slide-indicators";

  let carouselImgs = document.createElement("div")
  carouselImgs.className = "carouselImageContainer"



  carouselDiv.append(leftButton, rightButton, carouselImgs, dots);

  latestPosts.forEach((blog) => {
    let image = document.createElement("img")
    image.src = blog.media.url
    image.alt = blog.media.alt
    image.className = "carouselImage visible"

    carouselImgs.appendChild(image)
  });

  carousel();
};

const makeBlogPostGrid = async (container, blogs) => {

  blogs.sort((a, b) => new Date(b.created) - new Date(a.created));
  blogs.forEach((blog) => {
    let imageBox = document.createElement("div");
    imageBox.className = "postImageBox flex items-center justify-center";

    let image = document.createElement("img");
    image.src = blog.media.url;
    image.alt = "blog Image";
    image.className = "postGridImage cursor";
    image.addEventListener("click", () => {
      window.location.href = window.location.origin + "/post/index.html?" + blog.id;
    });

    let title = document.createElement("h2");
    title.innerText = blog.title;
    title.className = "headerTwo imageTitle cursor";

    container.appendChild(imageBox);
    imageBox.append(image, title);
  });
};

runPage();
