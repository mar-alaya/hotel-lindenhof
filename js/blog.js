import { renderBlog } from "./ui/render.js";
import { article_list } from "./data/blog_api.js";
const blog_container = document.querySelector("#blog-container");

article_list.forEach((article) => {
  blog_container.appendChild(renderBlog(article));
});
