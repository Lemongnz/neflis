import detail from '../MovieDetails.json';
import styles from '../modules/MovieDetails.module.css'




export function MovieDetails() {
  const imagenUrl = `https://image.tmdb.org/t/p/w500${detail.poster_path}`


  return (
    <div>
      <img className={styles.img} src={imagenUrl} alt={detail.title} />
      <div className={styles.text}>
        <p><span>Title: </span>{detail.original_title}</p>
        <p><span>Description: </span>{detail.overview}</p>
        <p><span></span></p>
      </div>
    </div>
  )
}