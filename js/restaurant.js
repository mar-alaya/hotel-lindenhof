import { menu_database } from "./data/menu.js";
import { renderRestaurant } from "./ui/render.js";

const starters_container = document.querySelector("#menu-starters");
const mains_container = document.querySelector("#menu-mains");
const desserts_container = document.querySelector("#menu-desserts");

const selector_starters = document.querySelector("#starters");
const selector_mains = document.querySelector("#mains");
const selector_desserts = document.querySelector("#desserts");

if (selector_mains.checked) {
  mains_container.innerText = "";
  const mains_list = menu_database.filter(
    (menuItem) => menuItem.category === "mains",
  );

  mains_list.forEach((menuItem) => {
    mains_container.appendChild(renderRestaurant(menuItem));
  });
}

selector_starters.addEventListener("click", () => {
  selector_starters.checked = true;

  if (selector_starters.checked) {
    starters_container.innerText = "";
    const starters_list = menu_database.filter(
      (menuItem) => menuItem.category === "starters",
    );

    starters_list.forEach((menuItem) => {
      starters_container.appendChild(renderRestaurant(menuItem));
    });
  }
});

selector_desserts.addEventListener("click", () => {
  selector_desserts.checked = true;

  if (selector_desserts.checked) {
    desserts_container.innerText = "";
    const desserts_list = menu_database.filter(
      (menuItem) => menuItem.category === "desserts",
    );

    desserts_list.forEach((menuItem) => {
      desserts_container.appendChild(renderRestaurant(menuItem));
    });
  }
});
