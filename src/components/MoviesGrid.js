import { MovieCard } from "./MovieCard";
import styles from '../modules/MovieGrid.module.css'
import { useEffect, useState } from "react";


export function MoviesGrid() {
  const [ movies , setMovies ] = useState([]);
  

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/discover/movie", {
      headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkODEyNWU2NjQ1MDNhOTEwMjMyNDM1NWRkZjhlMzE3YSIsInN1YiI6IjYyMTdkNDk3YTZkOTMxMDAxYjU3N2Y0MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tiz3u1icLXXo61aZ6JTcZ2Lx9VFPFpzKg7DvYHkIYaM",
        "Content-Type": "aplication/json;charset=utf-8",
      }
    })
    .then((result) => result.json())
    .then((data) => {
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