import { MovieCard } from "./MovieCard";
import movies from '../Movies.json';
import styles from '../modules/MovieGrid.module.css'

export function MoviesGrid() {
  return (
    <ul className={styles.grid}>
      {movies.map((movie) =>  (
        <MovieCard key={movie.id} movie={movie}   />
      ))
      }
    </ul>
  );   
}