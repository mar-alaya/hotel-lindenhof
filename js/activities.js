import { activities_database } from "./data/activities_data.js";
import { renderActivities } from "./ui/render.js";

const activities_container = document.querySelector("#activities-container");

activities_database.forEach((activity) => {
  activities_container.appendChild(renderActivities(activity));
});
