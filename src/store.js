import { createStore } from "redux";
import { filmsReducer } from './reducers/filmsReducer';

export const store = createStore(filmsReducer, []);