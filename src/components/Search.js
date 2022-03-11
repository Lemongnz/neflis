import { useNavigate } from 'react-router-dom';
import styles from '../modules/Search.module.css'
import { FiSearch } from "react-icons/fi";

export function Search() {  
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  const searchFunction = (event) => {
    const query = event.target.value;
    navigate(`/?search=${query}`);
  }

  return (
    <div className={styles.wrapper}>
      <form className={styles.flex} onSubmit={handleSubmit}>
        <input 
          type='text' 
          className={styles.input} 
          placeholder="Search Movie ..."
          onChange={searchFunction}
        />
        <button type='submit' className={styles.search}> <FiSearch /> </button>
      </form>
    </div>
  )
}