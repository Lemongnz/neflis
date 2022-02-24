import styles from '../modules/MovieDetails.module.css'
import { useEffect, useState } from 'react';
import { get } from '../httpClient';
import { useParams } from "react-router-dom";

export function MovieDetails() {
  const { movieId } = useParams();
  const [ movie, setMovie ] = useState(null)
  const imageUrl = "https://image.tmdb.org/t/p/w500"

  useEffect(() => {
    get("/movie/" + movieId).then((data) => {
      setMovie(data);
    });
  }, [movieId]);

  if (!movie) {
    return null;
  }

  return (
    <div className={styles.card}>
      <img
      className={styles.img} 
      src={imageUrl + movie.poster_path} 
      alt={movie.title} />
      <div className={styles.text}>
        <p><span>Title: </span>{movie.original_title}</p>
        <p><span>Genres: </span>{movie.genres.map((gen) => gen.name).join(", ")}</p>
        <p><span>Description: </span>{movie.overview}</p>
      </div>
    </div>
  )
}