import './App.css';
import { LandinPage } from './pages/LandingPage'
import { MovieDetails } from './pages/MovieDetails';
import styles from "./modules/App.module.css"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
      <header className="App">        
        <Link to="/"><h1 className={styles.title}>neflis</h1></Link>
        
      </header>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<LandinPage />} />
          <Route path="/movie/:movieId" element={<MovieDetails />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
