async function getReviews() {
  const response = await fetch("https://dummyjson.com/comments/?limit=6");

  if (!response.ok) {
    throw new Error("Data charge failed");
  }

  const reviews = await response.json();

  return reviews;
}

const reviews_raw = await getReviews();

export const reviews_list = reviews_raw.comments.map((review) => ({
  name: review.user.fullName,
  body: review.body,
}));
