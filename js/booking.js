import { rooms_database } from "./data/rooms.js";
import { renderRooms } from "./ui/render.js";
const rooms_list = document.querySelector("#step-rooms-container");

rooms_database.forEach((roomItem) => {
  rooms_list.appendChild(renderRooms(roomItem));
});
