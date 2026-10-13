export function renderRooms(roomItem) {
  const { name, baseNightPrice, description, ksp, image } = roomItem;

  const room_card = document.createElement("div");
  room_card.classList.add(
    "card",
    "sm:card-side",
    "bg-base-100",
    "border",
    "border-base-300",
    "shadow-md",
  );

  const room_name = document.createElement("h3");
  room_name.innerText = name;
  room_card.appendChild(room_name);

  const base_price = document.createElement("p");
  base_price.innerText = baseNightPrice + "€";
  room_card.appendChild(base_price);

  const room_description = document.createElement("p");
  room_description.innerText = description;
  room_card.appendChild(room_description);

  const room_ksp = document.createElement("div");
  room_ksp.innerText = ksp;
  room_ksp.classList.add("badge", "badge-warning");
  room_card.appendChild(room_ksp);

  const room_img = document.createElement("img");
  room_img.src = image;
  room_img.classList.add("h-48", "sm:h-auto", "sm:w-56", "shrink-0");
  room_card.appendChild(room_img);

  const add_btn = document.createElement("button");
  add_btn.innerText = "Book now";
  add_btn.classList.add("btn");
  room_card.appendChild(add_btn);

  return room_card;
}
