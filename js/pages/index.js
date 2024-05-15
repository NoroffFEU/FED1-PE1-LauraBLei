import { makeHeader } from "../components/header.js";
import { makeFooter } from "../components/footer.js";
import { doFetch } from "../components/fetch.js";
import { carousel } from "../components/carousel.js";
import { makePagination } from "../components/pagination.mjs";

const runPage = async () => {
  const blogs = await doFetch(
    "GET",
    "https://v2.api.noroff.dev/blog/posts/Tompe"
  );
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
    "flex flex-col justify-center items-center marginBotTop width-100";

  let headlineContainerTwo = document.createElement("div");
  headlineContainerTwo.className = "headlineContainer flex justify-center";

  let allPostsHeadline = document.createElement("h1");
  allPostsHeadline.innerText = "Blog Posts";
  allPostsHeadline.className = "headerOne";

  let blogPostGrid = document.createElement("div");
  blogPostGrid.className = "blogPostGridContainer";

  let paginationNumbers = document.createElement("div")
  paginationNumbers.id = "paginationContainer"

  main.appendChild(container);
  container.append(
    headlineContainerOne,
    carouselDiv,
    headlineContainerTwo,
    blogPostGrid,
    paginationNumbers
  );
  headlineContainerOne.appendChild(recentPostsHeadline);
  headlineContainerTwo.appendChild(allPostsHeadline);

  makeCarousel(carouselDiv, blogs);
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

  let dot1 = document.createElement("span")
  dot1.className ="dot active"

  let dot2 = document.createElement("span")
  dot2.className ="dot"

  let dot3 = document.createElement("span")
  dot3.className ="dot"


  let carouselImgs = document.createElement("div");
  carouselImgs.className = "width-100 heigt-100";

  carouselDiv.append(leftButton, rightButton, carouselImgs, dots);
  dots.append(dot1,dot2,dot3)

  latestPosts.forEach((blog) => {
    let carouselBox = document.createElement("div")
    carouselBox.className = "carouselBox visible justify-center items-center carouselImageContainer shadow width-100"
    let image = document.createElement("img");
    image.src = blog.media.url;
    image.alt = blog.media.alt;
    image.className = "width-100 height-100 object-fit carouselImg"

    let textBox = document.createElement("div")
    textBox.className = "carouselButtons gap10 flex flex-col items-center position-right textBoxCarousel"

    let title = document.createElement("h2")
    title.innerText = blog.title
    title.className = "headerTwo"


    let button = document.createElement("button")
    button.innerText = "Read More"
    button.className = "smallBlueButton"
    button.addEventListener("click", () => {
      window.location.href = "post/index.html?" + blog.id;
    });
    carouselImgs.appendChild(carouselBox)
    carouselBox.append(image,textBox)
    textBox.append(title,button)
  })

  carousel();
};

const makeBlogPostGrid = async (container, blogs) => {
  // blogs.sort((a, b) => new Date(b.created) - new Date(a.created));

  makePagination(container, blogs)
  
};

runPage();
