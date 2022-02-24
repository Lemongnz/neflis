import './App.css';
import { MoviesGrid } from './components/MoviesGrid';
import styles from "./modules/App.module.css"



function App() {
  return (
    <div className="App">
      <h1 className={styles.title}>neflis</h1>
      <MoviesGrid></MoviesGrid>
    </div>
  );
}

export default App;
