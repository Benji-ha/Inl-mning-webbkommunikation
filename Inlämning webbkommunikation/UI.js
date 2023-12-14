// Här har jag valt att lägga allt som har med UI't att göra

import { collection, getDocs, query, where} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";
import { db } from './firebase.js'
import { updateMovie, deleteMovie } from "./dvd-main.js";

const closeMoviesButton = document.querySelector("#closeMovies");

async function displayMovies () {
    const movieDatabase = await getDocs(collection(db, "movies"));

    const moviesContainer = document.querySelector("#displayMovies");

    moviesContainer.innerHTML = ""; // Clears the list of movies
  
    movieDatabase.forEach((movies) => {
      const moviesData = movies.data();
      const movieElement = document.createElement("article");
      movieElement.innerHTML = `<img src="${moviesData.Poster}"></img> <h2> Title: ${moviesData.title}</h2> <p>Genre: ${moviesData.genre}</p><p> Release date: ${moviesData.releaseDate}</p> <h3>Watched: ${moviesData.watched}</h3>`;
      moviesContainer.appendChild(movieElement);
      moviesContainer.classList.add("displayedMovies__container");
      movieElement.classList.add("displayedMovies__card");
  
      // Button that let's us now if it's watched
      const addWatchedButton = document.createElement("button");
      movieElement.appendChild(addWatchedButton);
      addWatchedButton.classList.add("watched-button");
      addWatchedButton.innerText = "Watched";
      addWatchedButton.addEventListener("click", () => updateMovie(movies.id, moviesData.watched));
  
      const deletebutton = document.createElement("button");
      deletebutton.innerText = "Delete";
      deletebutton.classList.add("delete-button");
      movieElement.appendChild(deletebutton);
      deletebutton.addEventListener("click", async () => await deleteMovie(movies.id));

    });
  
    closeMoviesButton.style.display = "block";
    
  }
  async function searchMovies() {
    const searchMovies = document.querySelector('#searchBar');
    const moviesContainer = document.querySelector("#displayMovies");
    let searchInput = {
        title: searchMovies.value
    }

    const searchQuery = query(collection(db, "movies"), where("title", "==", searchInput.title));

    const searchedQueryList = await getDocs(searchQuery);

    searchedQueryList.forEach(movies => {
        const moviesData = movies.data();
        const movieElement = document.createElement("article");
        movieElement.innerHTML = `<img src="${moviesData.Poster}"></img> <h2> Title: ${moviesData.title}</h2> <p>Genre: ${moviesData.genre}</p><p> Release date: ${moviesData.releaseDate}</p> <h3>Watched: ${moviesData.watched}</h3>`;
        moviesContainer.appendChild(movieElement);
        moviesContainer.classList.add("displayedMovies__container");
        movieElement.classList.add("displayedMovies__card");

      });
    
      closeMoviesButton.style.display = "block";
}



export { displayMovies, searchMovies};