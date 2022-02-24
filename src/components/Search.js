import styles from '../modules/Search.module.css'

export function Search() {
  return (
    <div className={styles.wrapper}>
      <input className={styles.input} placeholder="Search Movie ..."></input>
    </div>
  )
}