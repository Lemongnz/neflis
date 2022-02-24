import styles from '../modules/MovieCard.module.css'

export function MovieCard({ movie }) {
  const imagenUrl = `https://image.tmdb.org/t/p/w300${movie.poster_path}`

  return (
    <li className={styles.lis}>
      <div className={styles.cardDiv}>
        <img className={styles.img} src={imagenUrl} alt={movie.title}></img>
        <span className={styles.vote} >{movie.vote_average}</span>
      </div>
      
      
      <span className={styles.title} >{movie.title}</span> 
    </li>
  )
}