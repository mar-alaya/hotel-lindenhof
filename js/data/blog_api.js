async function getArticles() {
  const response = await fetch("https://dummyjson.com/posts");

  if (!response.ok) {
    throw new Error("Data charge failed");
  }

  const articles = await response.json();

  return articles;
}

const articles_raw = await getArticles();

export const article_list = articles_raw.posts.map((article) => ({
  id: article.id,
  title: article.title,
  body: article.body,
  views: article.views,
}));
