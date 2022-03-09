import { MovieCard } from "./MovieCard";
import styles from '../modules/MovieGrid.module.css'
import { filmsFilterReducer } from '../reducers/reduxFilms'
import { createStore } from "redux"
import { get } from "../httpClient";
import { useState } from "react";

export  function MoviesGrid() {
  const [movies, setMovies] = useState([])
  const searchURL = "/discover/movie";

   get(searchURL)
    .then((data) => {
      store.dispatch({data: data.results, type: ""})
      console.log(data.results)                  
    })
                
  const store = createStore(filmsFilterReducer, [])
  // store.dispatch({type: "load"})

  store.subscribe(() => {
    store.getState().then()
  })



  return (
    <ul className={styles.grid}>
      {
        movies.map((movie) => (<MovieCard key={movie.id} movie={movie} />))
      }
    </ul>
  );   
}