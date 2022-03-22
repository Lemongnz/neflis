import styles from '../modules/MovieDetails.module.css'
import { useEffect, useState } from 'react';

import { Link, useParams } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi"
import { getOne } from '../services/movies';


export function MovieDetails() {
  const { movieId } = useParams();
  const [ movie, setMovie ] = useState(null)
  const imageUrl = "https://image.tmdb.org/t/p/w500"

  useEffect(() => {
    getOne(movieId).then((data) => {
      setMovie(data);
    });
  }, [movieId]);

  if (!movie) {
    return null;
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.arrow}>
        <Link to="/"><FiArrowLeft/></Link>
      </div>
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
    </div>
  )
}