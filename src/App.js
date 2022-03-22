import './App.css';
import { LandinPage } from './pages/LandingPage'
import { MovieDetails } from './pages/MovieDetails';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { HeaderNeflis } from './components/HeaderNeflis';

function App() {
  return (
    <Router>
      <HeaderNeflis />
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
