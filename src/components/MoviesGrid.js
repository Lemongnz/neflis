import { MovieCard } from "./MovieCard";
import styles from '../modules/MovieGrid.module.css'
import { useState } from "react";
import {store} from '../store';

export  function MoviesGrid() {
  const [movies, setMovies] = useState([])

  store.subscribe(() => {
    setMovies(store.getState());
  })

  return (
    <ul className={styles.grid}>
      {
        movies?.map((movie) => (<MovieCard key={movie.id} movie={movie} />))
      }
    </ul>
  );   
}