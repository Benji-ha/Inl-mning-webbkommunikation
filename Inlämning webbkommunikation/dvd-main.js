// Detta är min main modul. Här har jag bara eventlisteners och knappar för att hålla det städat och så uppdelat som det går

import {
  addMovie,
  getMovies,
  hideCloseButton,
  deleteMovie,
  updateMovie,
} from "./functions.js";
import { displayMovies, searchMovies } from "./UI.js";

// Buttons
const addMovieToList = document.querySelector("#addMovieToList");
const showMovies = document.querySelector("#showMovies");
const searchbutton = document.querySelector("#searchButton");

// Function that adds the inputted movie

addMovieToList.addEventListener("click", () => addMovie());
showMovies.addEventListener("click", () => getMovies());
document
  .querySelector("#closeMovies")
  .addEventListener("click", hideCloseButton);

searchbutton.addEventListener("click", () => searchMovies());

export { updateMovie, deleteMovie, getMovies };

// God Jul & Gott Nytt Christoffer! :D
