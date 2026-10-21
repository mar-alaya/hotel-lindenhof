import { search } from "../data/search.js";
import { selected_room } from "../data/search.js";
import { suscribers } from "../data/newsletter.js";

const summary_checkin = document.querySelector("#summary-checkin");
const summary_checkout = document.querySelector("#summary-checkout");
const summary_adults = document.querySelector("#summary-adults");
const summary_children = document.querySelector("#summary-children");
const summary_room = document.querySelector("#summary-room");
const summary_price_night = document.querySelector("#summary-night");
const summary_total = document.querySelector("#summary-total");
const summary_discount = document.querySelector("#summary-discount");

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

  search.stay_nights = calcNights(search.checkout_date, search.checkin_date);

  const price_night =
    selected_room.base_price -
    selected_room.base_price * 0.05 * search.children_nr;
  summary_price_night.innerText = price_night + "€";

  let total_price = search.stay_nights * price_night;
  summary_total.innerText = total_price + "€";

  if (search.stay_nights > 4) {
    const price_long = price_night - price_night * 0.2;
    summary_price_night.innerText = price_long + "€";
    total_price = search.stay_nights * price_long;
    summary_total.innerText = total_price + "€";
  }

  if (search.voucher) {
    const discount = total_price * 0.1;
    const new_Price = total_price - discount;

    summary_discount.innerText = discount + "€";
    summary_total.innerText = new_Price + "€";
  }
}

export function selectRoom(roomItem) {
  selected_room.name = roomItem.name;
  selected_room.base_price = roomItem.baseNightPrice;

  updateSummary();
}

// Local Storage Functionen

export function saveSuscriber() {
  localStorage.setItem("suscribers", JSON.stringify(suscribers));
}

export function loadSuscribers() {
  const suscriber_list = localStorage.getItem("suscribers");

  if (suscriber_list) {
    const savedSuscribers = JSON.parse(suscriber_list);

    suscribers.splice(0, suscribers.length, ...savedSuscribers);
  }
}
