import { activities_database } from "./data/activities_data.js";
import { renderActivities } from "./ui/render.js";

const activities_container = document.querySelector("#activities-container");

activities_database.forEach((activity) => {
  activities_container.appendChild(renderActivities(activity));
});

const filter_season = document.querySelector("#filter-season");
const filter_difficulty = document.querySelector("#filter-difficulty");

filter_season.addEventListener("change", () => {
  activities_container.innerText = "";
  const selected_season = filter_season.value;
  const season_results = activities_database.filter(
    (activity) =>
      selected_season === "All" || activity.season === selected_season,
  );
  season_results.forEach((result) => {
    activities_container.appendChild(renderActivities(result));
  });

  filter_difficulty.addEventListener("change", () => {
    activities_container.innerText = "";
    const selected_difficulty = filter_difficulty.value;
    const difficulty_results = season_results.filter(
      (activity) =>
        selected_difficulty === "All" ||
        activity.difficulty === selected_difficulty,
    );
    difficulty_results.forEach((result) => {
      activities_container.appendChild(renderActivities(result));
    });
  });
});
