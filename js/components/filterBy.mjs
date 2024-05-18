import { makePagination } from "./pagination.mjs";

export const filterBy = (blogs) => {
  createEventListener(blogs);
};

const createEventListener = (blogs) => {
  document.querySelectorAll(".filter").forEach((li) => {
    li.addEventListener("click", () => {
      filterByTag(li.textContent, blogs);
    });
  });
};

const filterByTag = (tag, blogs) => {
  if (tag === "Show All") {
    console.log("blogs:", blogs);
    makePagination(blogs);
  } else {
    let sortedList = blogs.filter((blog) => {
      const checkthis = blog.tags.find((element ) => element === tag);
    });
    return checkthis;
    console.log("filter blogs:", sortedList);

    makePagination(sortedList);
  }
};
