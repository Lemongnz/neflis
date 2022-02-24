import detail from '../MovieDetails.json';
import styles from '../modules/MovieDetails.module.css'
// import { useParams } from "react-router-dom";



export function MovieDetails() {
  const imagenUrl = `https://image.tmdb.org/t/p/w500${detail.poster_path}`
  // const { movieId } = useParams();

  return (
    <div className={styles.card}>
      <img className={styles.img} src={imagenUrl} alt={detail.title} />
      <div className={styles.text}>
        <p><span>Title: </span>{detail.original_title}</p>
        <p><span>Genres: </span>{detail.genres.map((gen) => gen.name).join(", ")}</p>
        <p><span>Description: </span>{detail.overview}</p>
      </div>
    </div>
  )
}