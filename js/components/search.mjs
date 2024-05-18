// Code learned from: https://www.youtube.com/watch?v=TlP5WIxVirU //

import { displayPage, makePagination } from "./pagination.mjs";

export const searchMech = (blogs) => {
  const searchInput = document.querySelector("[data-search]");

  searchInput.addEventListener("input", (e) => {
    const value = e.target.value.toLowerCase();
    console.log(blogs);
    console.log(typeof(blogs));
    const newBlogs = blogs.filter((blog) => {
      if (value === "") {
        return true
      } else {
        return blog.title.toLowerCase().includes(value);
      }
    });
    console.log(newBlogs);
    makePagination(newBlogs);
  });
};
