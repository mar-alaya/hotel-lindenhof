import { selectRoom } from "../utils/helpers.js";

export function renderRooms(roomItem) {
  const { name, baseNightPrice, description, ksp, image } = roomItem;
  let selected = false;

  const room_card = document.createElement("div");
  room_card.classList.add(
    "card",
    "sm:card-side",
    "bg-base-100",
    "border",
    "border-base-300",
    "shadow-md",
  );

  const img_wrapper = document.createElement("figure");
  img_wrapper.classList.add("h-48", "sm:h-auto", "sm:w-56", "shrink-0");

  const room_img = document.createElement("img");
  room_img.src = image;
  room_img.alt = name;
  room_img.classList.add("h-full", "w-full", "object-cover");
  img_wrapper.appendChild(room_img);

  const card_body = document.createElement("div");
  card_body.classList.add(
    "card-body",
    "flex-col",
    "sm:flex-row",
    "justify-between",
    "gap-4",
  );

  const info_col = document.createElement("div");
  info_col.classList.add("flex", "flex-col", "gap-2");

  const room_name = document.createElement("h3");
  room_name.innerText = name;
  room_name.classList.add("card-title");

  const room_description = document.createElement("p");
  room_description.innerText = description;
  room_description.classList.add("text-sm", "text-base-content/70");

  const room_ksp = document.createElement("div");
  room_ksp.innerText = ksp;
  room_ksp.classList.add("badge", "badge-warning");
  room_card.appendChild(room_ksp);

  info_col.appendChild(room_name);
  info_col.appendChild(room_description);
  info_col.appendChild(room_ksp);

  const action_col = document.createElement("div");
  action_col.classList.add(
    "flex",
    "sm:flex-col",
    "items-center",
    "sm:items-end",
    "justify-between",
    "shrink-0",
  );

  const price_box = document.createElement("p");
  price_box.classList.add("sm:text-right");

  const base_price = document.createElement("span");
  base_price.innerText = baseNightPrice + " €";
  base_price.classList.add("text-2xl", "font-bold");

  const price_unit = document.createElement("span");
  price_unit.innerText = "/ night";
  price_unit.classList.add("block", "text-xs", "text-base-content/60");

  price_box.appendChild(base_price);
  price_box.appendChild(price_unit);

  const add_btn = document.createElement("button");
  add_btn.innerText = "Select room";
  add_btn.classList.add("btn", "btn-warning", "btn-selected");

  add_btn.addEventListener("click", () => {
    const buttons = document.querySelectorAll(".btn-selected");

    buttons.forEach((button) => {
      if (button !== add_btn) {
        button.innerText = "Select room";
        button.classList.remove("btn-ghost");
        button.classList.add("btn-warning");
      }
    });

    add_btn.innerText = "Selected";
    add_btn.classList.add("btn-ghost");
    selectRoom(roomItem);
  });

  action_col.appendChild(price_box);
  action_col.appendChild(add_btn);

  card_body.appendChild(info_col);
  card_body.appendChild(action_col);

  room_card.appendChild(img_wrapper);
  room_card.appendChild(card_body);

  return room_card;
}
