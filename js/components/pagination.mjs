
const MAX_BLOGS_PER_PAGE = 12

export const makePagination = (blogs) => {
  const container = document.getElementById("blogPostGrid")
  const pages = Math.ceil(blogs.length/MAX_BLOGS_PER_PAGE) ;
  let currentPage = 1;
  makePaginationNumbers(pages, blogs, currentPage,container)
  calculatePage(blogs, currentPage, container)
};

const makePaginationNumbers = (pages, blogs, currentPage,container) => {
  let paginationContainer = document.getElementById("paginationContainer")
  paginationContainer.innerHTML = ""
  for (let index = 1; index <= pages; index++) {
      const pageNumber = document.createElement("a")
      pageNumber.innerText = index
      pageNumber.className = `paginationButton alternativeHeadline cursor`

      pageNumber.addEventListener('click', () => {
      currentPage = index
        calculatePage(blogs,currentPage,container)
      })
      paginationContainer.appendChild(pageNumber)
  }
}

const calculatePage = (blogs, currentPage, container) => {
  const startBlogs = (currentPage-1) * MAX_BLOGS_PER_PAGE
  const lastBlogs = currentPage * MAX_BLOGS_PER_PAGE
  const blogsToShow = blogs.slice(startBlogs, lastBlogs)
    displayPage(container, blogsToShow)

}


const displayPage = async(container, blogs) => {
  container.innerHTML = ""
  blogs.forEach((blog) => {
    let imageBox = document.createElement("div");
    imageBox.className = "postImageBox flex items-center justify-center";

    let image = document.createElement("img");
    image.src = blog.media.url;
    image.alt = "blog Image";
    image.className = "postGridImage cursor";
    image.addEventListener("click", () => {
      window.location.href = "post/index.html?" + blog.id;
    });

    let title = document.createElement("h2");
    title.innerText = blog.title;
    title.className = "headerTwo imageTitle cursor font-medium";
    title.addEventListener("click", () => {
      window.location.href = "post/index.html?" + blog.id;
    });

    container.appendChild(imageBox);
    imageBox.append(image, title);
  });
};

