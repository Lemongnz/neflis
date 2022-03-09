import { get } from './httpClient';

const ALL_FILMS_URL = "/discover/movie";
const ONE_FILMS_URL = "/movie";
const QUERY_FILMS_URL = "/search/movie?query=";

export const getAll = () => get(ALL_FILMS_URL).then((data) => data.results);

export const filterMovies = (query) => get(`${QUERY_FILMS_URL}${query}`).then((data) => data.results);

export const getOne = (filmId) => get(`${ONE_FILMS_URL}/${filmId}`).then((data) => data);