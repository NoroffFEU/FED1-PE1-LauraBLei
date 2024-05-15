
const MAX_BLOGS_PER_PAGE = 12

export const makePagination = (container, blogs) => {
  const pages = Math.ceil(blogs.length/MAX_BLOGS_PER_PAGE) ;
  console.log(pages, blogs.length);
  let currentPage = 1;
  makePaginationNumbers(pages, blogs, currentPage,container)
  calculatePage(blogs, currentPage, container)
};

const makePaginationNumbers = (pages, blogs, currentPage,container) => {
  let paginationContainer = document.getElementById("paginationContainer")
  for (let index = 1; index <= pages; index++) {
    console.log(index);
      const pageNumber = document.createElement("a")
      pageNumber.innerText = index
      pageNumber.className = `paginationButton alternativeHeadline cursor`

      pageNumber.addEventListener('click', () => {
      currentPage = index
      console.log(currentPage);
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
  console.log(blogs);
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

