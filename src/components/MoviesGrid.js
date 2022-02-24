import { MovieCard } from "./MovieCard";
import styles from '../modules/MovieGrid.module.css'
import { useEffect, useState } from "react";
import { get } from "../httpClient";

export function MoviesGrid() {
  const [ movies , setMovies ] = useState([]);
  

  useEffect(() => {
    get("/discover/movie").then((data) => {
      setMovies(data.results);
    })
  }, []) 


  return (
    <ul className={styles.grid}>
      {movies.map((movie) =>  (
        <MovieCard key={movie.id} movie={movie}   />
      ))
      }
    </ul>
  );   
}