const prompt_nights = document.querySelector("#prompt-nights");
const prompt_guests = document.querySelector("#prompt-guests");

const card_single_room = document.querySelector("#single-room");
const card_double_room = document.querySelector("#double-room");
const card_triple_room = document.querySelector("#triple-room");
const text_no_rooms = document.querySelector("#no-rooms-text");

const add_btn = document.querySelectorAll("#book-btn");

const room = document.querySelector("#book-room");
const nights = document.querySelector("#book-nights");
const guests = document.querySelector("#book-guests");
const price = document.querySelector("#book-price");

let total_nights = Number(nights.innerText);
let total_guests = Number(guests.innerText);
let total_price = Number(price.innerText);

let search_nights;
let search_guests;

// Search Engine Flow - Nights

prompt_nights.addEventListener("click", () => {
  let search_nights = Number(
    prompt("Enter the number of nights you want to stay with us:"),
  );
});

// Search Engine Flow - Guests

prompt_guests.addEventListener("click", () => {
  let search_guests = Number(
    prompt("Enter the number of guests that will stay with us:"),
  );

  if (search_guests === 1) {
    card_single_room.style.backgroundColor = "grey";
    card_double_room.style.backgroundColor = "";
    card_triple_room.style.backgroundColor = "";
  } else if (search_guests === 2) {
    card_double_room.style.backgroundColor = "grey";
    card_single_room.style.backgroundColor = "";
    card_triple_room.style.backgroundColor = "";
  } else if (search_guests === 3) {
    card_triple_room.style.backgroundColor = "grey";
    card_single_room.style.backgroundColor = "";
    card_double_room.style.backgroundColor = "";
  } else {
    text_no_rooms.innerText = "No rooms available for your group.";
  }
});

// Add Rooms Flow
