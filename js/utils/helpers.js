import { search } from "../data/search.js";
import { selected_room } from "../data/search.js";

const summary_checkin = document.querySelector("#summary-checkin");
const summary_checkout = document.querySelector("#summary-checkout");
const summary_adults = document.querySelector("#summary-adults");
const summary_children = document.querySelector("#summary-children");
const summary_room = document.querySelector("#summary-room");
const summary_price_night = document.querySelector("#summary-night");
const summary_total = document.querySelector("#summary-total");

export function calcNights(checkout, checkin) {
  const stay_miliseconds = checkout - checkin;
  return Math.round(stay_miliseconds / (1000 * 60 * 60 * 24));
}

export function updateSummary() {
  summary_checkin.innerText = search.checkin_date.toLocaleDateString("de-DE");
  summary_checkout.innerText = search.checkout_date.toLocaleDateString("de-DE");
  summary_adults.innerText = search.adult_nr;
  summary_children.innerText = search.children_nr;
  summary_room.innerText = selected_room.name;
  summary_price_night.innerText = selected_room.base_price + "€";
}

export function selectRoom(roomItem) {
  selected_room.name = roomItem.name;
  selected_room.base_price = roomItem.baseNightPrice;

  search.stay_nights = calcNights(search.checkout_date, search.checkin_date);

  let total_price = search.stay_nights * selected_room.base_price;
  summary_total.innerText = total_price + "€";

  updateSummary();
}
