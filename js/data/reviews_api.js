async function getReviews() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/comments/?limit=4",
  );

  if (!response.ok) {
    throw new Error("Data charge failed");
  }

  const reviews = await response.json();

  return reviews;
}

const reviews_raw = await getReviews();
const reviews_sliced = reviews_raw.slice(0, 5);

export const reviews_list = reviews_sliced.map((review) => ({
  name: review.name,
  body: review.body,
}));
