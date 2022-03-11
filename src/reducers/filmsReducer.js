export const filmsReducer = (state = [], action) => {
  
  console.log(state, action)
  
  switch (action.type) {
    case '@films/set':
      state = action.films;
      break;
    default:
      break;
  }

  return state;
};
 
export const setFilms = films => { // esto es un "action creator" segun midudev :)
  return {
    type: '@films/set',
    films
  }
}
