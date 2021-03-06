import { useDispatch } from 'react-redux';
import { MoviesGrid } from '../components/MoviesGrid'
import { Portada } from '../components/Portada';
import { useQuery } from '../hooks/useQueryHook';
import { setFilms } from '../reducers/filmsReducer';
import { filterMovies, getAll } from '../services/movies';

export function LandinPage() {
  const dispatch = useDispatch();
  const query = useQuery();
  const search = query.get("search");

  if (search) {
    filterMovies(search).then((films) => {
        dispatch(setFilms(films));
    });
  } else  {
    getAll().then((films) => {
        dispatch(setFilms(films));
    })
  }

  return (
    <div>
      <Portada />
      <MoviesGrid />
    </div>
  )
}