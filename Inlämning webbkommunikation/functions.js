// För att dela upp mer än UI modulen så lade jag resterande funktioner här för att få ut fler moduler och hålla main modulen fri

import { collection, getDocs, addDoc, query, where, updateDoc, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";
import { db } from './firebase.js';
import { displayMovies, searchMovies } from "./UI.js";

async function addMovie() {
    const addTitle = document.querySelector("#addTitle");
    const addGenre = document.querySelector("#addGenre");
    const addReleaseYear = document.querySelector("#addReleaseYear");
  
    let movieInput = {
      Poster:"\image missing.jpg",
      title: addTitle.value,
      genre: addGenre.value,
      releaseDate: addReleaseYear.value,
      watched: false,
    };
  
    // Creates a query that checks the database for movies with same title
    const movieQuery = query(
      collection(db, "movies"),
      where("title", "==", movieInput.title)
    );
    const movieQueryList = await getDocs(movieQuery);
  
    console.log(movieQueryList);
  
    if (movieQueryList.size > 0) {
      alert("There is already a movie added with that name, try adding another");
    } else {
      try {
        await addDoc(collection(db, "movies"), movieInput);
      } catch (error) {
        console.log(`ERROR: ${error}`);
      }
    }
}

async function getMovies() {
    const movieDatabase = await getDocs(collection(db, "movies"));
    displayMovies(movieDatabase)
  //   searchMovies(movieDatabase)
}

async function hideCloseButton() {
    location.reload();
}

async function deleteMovie(deleteId) {
    try {
        await deleteDoc(doc(db, "movies", deleteId));
        getMovies();
      } catch (error) {
        console.log(`ERROR: ${error}`);
      }
}

async function updateMovie(moviesId, moviesWatched) {
    try {
        const updatedMovie = !moviesWatched;
    
        await updateDoc(doc(db, "movies", moviesId), { watched: updatedMovie });
        getMovies();
      } catch (error) {
        console.log(`ERROR: ${error}`);
      }
}

export { addMovie, getMovies, hideCloseButton, deleteMovie, updateMovie };
