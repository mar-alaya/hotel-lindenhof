import { rooms_database } from "./data/rooms.js";
import { search } from "./data/search.js";
import { renderRooms } from "./ui/render.js";
import { calcNights, updateSummary } from "./utils/helpers.js";

const rooms_list = document.querySelector("#step-rooms-container");

const checkin = document.querySelector("#checkin");
const checkout = document.querySelector("#checkout");
const adults = document.querySelector("#search-adults");
const children = document.querySelector("#search-children");
const search_btn = document.querySelector("#search-btn");

search_btn.addEventListener("click", () => {
  search.checkin_date = new Date(checkin.value);
  search.checkout_date = new Date(checkout.value);
  search.adult_nr = Number(adults.value);
  search.children_nr = Number(children.value);
  search.stay_nights = calcNights(search.checkout_date, search.checkin_date);

  let total_guests = Number(search.adult_nr + search.children_nr);

  rooms_list.innerHTML = "";
  rooms_database.forEach((roomItem) => {
    if (total_guests <= roomItem.maxGuests) {
      rooms_list.appendChild(renderRooms(roomItem));
    }
  });
});
