import { makeHeader } from "../components/header.js";
import { makeFooter } from "../components/footer.js";
import { doFetch } from "../components/fetch.js";
import { carousel } from "../components/carousel.js";
import { makePagination } from "../components/pagination.mjs";
import { sortBy } from "../components/sortBy.mjs";
import { filterBy } from "../components/filterBy.mjs";
import { searchMech } from "../components/search.mjs";

const runPage = async () => {
  const blogs = await doFetch(
    "GET",
    "https://v2.api.noroff.dev/blog/posts/Tompe"
  );
  makePage(blogs);
  makeHeader();
  makeFooter();
  sortBy(blogs);
  filterBy(blogs);
  searchMech(blogs)
};

const makePage = (blogs) => {
  const main = document.querySelector("main");

  const container = document.createElement("div");
  container.className = "container";

  const headlineContainerOne = document.createElement("div");
  headlineContainerOne.className = "headlineContainer flex justify-center";

  const recentPostsHeadline = document.createElement("h1");
  recentPostsHeadline.innerText = "Recent Posts";
  recentPostsHeadline.className = "headerOne";

  const carouselDiv = document.createElement("div");
  carouselDiv.className =
    "flex flex-col justify-center items-center marginBotTop width-100";

  const headlineContainerTwo = document.createElement("div");
  headlineContainerTwo.className = "headlineContainer flex justify-center";

  const allPostsHeadline = document.createElement("h1");
  allPostsHeadline.innerText = "Blog Posts";
  allPostsHeadline.className = "headerOne";

  const mechContainer = document.createElement("div");
  mechContainer.className = "mechContainer flex between width-100 gap10";
  mechContainer.id = "mechContainer";

  const blogPostGrid = document.createElement("div");
  blogPostGrid.className = "blogPostGridContainer";
  blogPostGrid.id = "blogPostGrid";

  const paginationNumbers = document.createElement("div");
  paginationNumbers.id = "paginationContainer";

  main.appendChild(container);
  container.append(
    headlineContainerOne,
    carouselDiv,
    headlineContainerTwo,
    mechContainer,
    blogPostGrid,
    paginationNumbers
  );
  headlineContainerOne.appendChild(recentPostsHeadline);
  headlineContainerTwo.appendChild(allPostsHeadline);

  makeCarousel(carouselDiv, blogs);
  makeBlogPostGrid(blogs, mechContainer);
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

  let dot1 = document.createElement("span");
  dot1.className = "dot active";

  let dot2 = document.createElement("span");
  dot2.className = "dot";

  let dot3 = document.createElement("span");
  dot3.className = "dot";

  let carouselImgs = document.createElement("div");
  carouselImgs.className = "width-100 heigt-100";

  carouselDiv.append(leftButton, rightButton, carouselImgs, dots);
  dots.append(dot1, dot2, dot3);

  latestPosts.forEach((blog) => {
    let carouselBox = document.createElement("div");
    carouselBox.className =
      "carouselBox visible justify-center items-center carouselImageContainer shadow width-100";
    let image = document.createElement("img");
    image.src = blog.media.url;
    image.alt = blog.media.alt;
    image.className = "width-100 height-100 object-fit carouselImg";

    let textBox = document.createElement("div");
    textBox.className =
      "carouselButtons gap10 flex flex-col items-center position-right textBoxCarousel";

    let title = document.createElement("h2");
    title.innerText = blog.title;
    title.className = "headerTwo";

    let button = document.createElement("button");
    button.innerText = "Read More";
    button.className = "smallBlueButton";
    button.addEventListener("click", () => {
      window.location.href = "post/index.html?" + blog.id;
    });
    carouselImgs.appendChild(carouselBox);
    carouselBox.append(image, textBox);
    textBox.append(title, button);
  });

  carousel();
};

const makeBlogPostGrid = async (blogs, mechContainer) => {
  const buttonContainer = document.createElement("div");
  buttonContainer.className = "flex between width-100 btnContainer ";

  const sortButtonDetails = document.createElement("details");

  const sortButtonSummary = document.createElement("summary");
  sortButtonSummary.innerText = "Sort By";
  sortButtonSummary.className = "smallBlueButton list-style-none";

  const sortButtonUl = document.createElement("ul");
  sortButtonUl.className = "list-style-none mechButton";

  const sortByNewest = document.createElement("li");
  sortByNewest.innerText = "Newest";
  sortByNewest.className = "headerTwo cursor";
  sortByNewest.id = "newest";

  const sortByOldest = document.createElement("li");
  sortByOldest.innerText = "Oldest";
  sortByOldest.className = "headerTwo cursor";
  sortByOldest.id = "oldest";

  const filterButtonDetails = document.createElement("details");

  const filterButtonSummary = document.createElement("summary");
  filterButtonSummary.innerText = "Filter By";
  filterButtonSummary.className = "smallBlueButton list-style-none";

  const filterButtonUl = document.createElement("ul");
  filterButtonUl.className = "list-style-none mechButton";

  const showAll = document.createElement("li");
  showAll.innerText = "Show All";
  showAll.className = "headerTwo cursor filter";

  const filterByOutdoor = document.createElement("li");
  filterByOutdoor.innerText = "Outdoor";
  filterByOutdoor.className = "headerTwo cursor filter";

  const filterByFamily = document.createElement("li");
  filterByFamily.innerText = "Family";
  filterByFamily.className = "headerTwo cursor filter";

  const filterByFriends = document.createElement("li");
  filterByFriends.innerText = "Friends";
  filterByFriends.className = "headerTwo cursor filter";

  const filterByTompe = document.createElement("li");
  filterByTompe.innerText = "Tompe";
  filterByTompe.className = "headerTwo cursor filter";

  const filterByIndoor = document.createElement("li");
  filterByIndoor.innerText = "Indoor";
  filterByIndoor.className = "headerTwo cursor filter";

  const searchContainer = document.createElement("div");
  searchContainer.className = "searchContainer width-100 "
  
  
  const input = document.createElement("input");
  input.type = "search";
  input.id = "search";
  input.setAttribute("data-search", "")
  input.className = "width-100 searchInput shadow"
  input.placeholder = "Search..."

  mechContainer.append(buttonContainer, searchContainer);
  buttonContainer.append(sortButtonDetails, filterButtonDetails);
  sortButtonDetails.append(sortButtonSummary, sortButtonUl);
  sortButtonUl.append(sortByNewest, sortByOldest);
  filterButtonDetails.append(filterButtonSummary, filterButtonUl);
  searchContainer.appendChild(input)
  filterButtonUl.append(
    showAll,
    filterByFamily,
    filterByOutdoor,
    filterByFriends,
    filterByTompe,
    filterByIndoor
  );

  makePagination(blogs);
};

runPage();
