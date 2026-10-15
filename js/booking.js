import { rooms_database } from "./data/rooms.js";
import { search, selected_room } from "./data/search.js";
import { renderRooms } from "./ui/render.js";
import { calcNights, selectRoom, updateSummary } from "./utils/helpers.js";

const rooms_list = document.querySelector("#step-rooms-container");

const checkin = document.querySelector("#checkin");
const checkout = document.querySelector("#checkout");
const adults = document.querySelector("#search-adults");
const children = document.querySelector("#search-children");
const search_btn = document.querySelector("#search-btn");
const booking_engine = document.querySelector("#booking-engine");

// Step 1 - Search Engine

booking_engine.addEventListener("submit", () => {
  event.preventDefault();
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

// Apply Voucher Flow

const voucher = "welcome10";
const voucher_btn = document.querySelector("#voucher-btn");
const voucher_form = document.querySelector("#voucher-nr");
const voucher_feedback = document.querySelector("#voucher-text");

voucher_btn.addEventListener("click", () => {
  const voucher_input = voucher_form.value;

  if (voucher_input === voucher) {
    voucher_feedback.innerText = "Applied voucher!";
    search.voucher = true;
    updateSummary();
  } else {
    voucher_feedback.innerText = "Voucher not valid.";
    search.voucher = false;
  }
});

// Step 2 - Reservation Form

const continue_btn = document.querySelector("#continue-btn");
const form = document.querySelector("#step-form");
const breadcrumb_form = document.querySelector("#step-two");

continue_btn.addEventListener("click", () => {
  rooms_list.classList.add("hidden");
  form.classList.remove("hidden");
  breadcrumb_form.classList.add("step-primary");
  continue_btn.style.display = "none";
  finish_btn.classList.remove("hidden");
});

// Step 3 - Reservation Confirmed

const finish_btn = document.querySelector("#finish-btn");
const sucess = document.querySelector("#step-confirmed");
const breadcrumb_sucess = document.querySelector("#step-three");
const reservation_form = document.querySelector("#reservation-form");

reservation_form.addEventListener("submit", () => {
  event.preventDefault();
  form.classList.add("hidden");
  sucess.classList.remove("hidden");
  breadcrumb_sucess.classList.add("step-primary");

  sucess.classList.add(
    "flex",
    "flex-col",
    "items-center",
    "text-center",
    "gap-5",
    "p-8",
    "bg-base-100",
    "border",
    "border-base-300",
    "rounded-box",
    "shadow-md",
  );
});
