import { renderBlog } from "./ui/render.js";
import { article_list } from "./data/blog_api.js";
const blog_container = document.querySelector("#blog-container");

article_list.forEach((article) => {
  blog_container.appendChild(renderBlog(article));
});

const search_bar = document.querySelector("#blog-search");

search_bar.addEventListener("input", () => {
  blog_container.innerText = "";
  const search_input = search_bar.value;
  const results = article_list.filter((article) =>
    article.title.toLowerCase().includes(search_input.toLowerCase()),
  );

  if (results.length === 0) {
    blog_container.innerText = "No articles found";
  } else {
    results.forEach((result) => {
      blog_container.appendChild(renderBlog(result));
    });
  }
});
