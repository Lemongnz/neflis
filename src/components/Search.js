import styles from '../modules/Search.module.css'
import { FaSearch } from "react-icons/fa"
import { useNavigate } from 'react-router-dom';


export function Search() {
  const navigate = useNavigate();
  
  const handleSubmit = (event) => {
    event.preventDefault();

  }


  return (
    <div className={styles.wrapper}>
      <form className={styles.flex} onSubmit={handleSubmit}>
        <input 
          type='text' 
          className={styles.input} 
          placeholder="Search Movie ..."
          onChange={(event) => {
            const value = event.target.value;
            navigate(`/?search=${value}`)
          }}
        />
        <button type='submit' className={styles.search}><FaSearch /></button>
      </form>
    </div>
  )
}