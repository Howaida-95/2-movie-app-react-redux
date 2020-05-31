import * as actionTypes from '../actions/actionTypes';
import { updateObject } from './../../utility/helper';
const initialState = {
  movie: null,
  actors: null,
  directors: [],
  loading: false,
  error: false
}
const homeReducer = (state = initialState, action) => {
  switch (action.type) {
/* ------------------------------ fetch popular movies ----------------------- */
    case actionTypes.FETCH_Movie_START: return updateObject(state, {loading: true});
    case actionTypes.FETCH_Movie_SUCCESS: return updateObject(state, {movie: action.movie})
    case actionTypes.FETCH_Movie_FAIL: return updateObject(state,{error: action.error, loading: false});

/* ---------------------------- fetch movie credits ----------------------- */
    case actionTypes.FETCH_CREDITS_START: return updateObject(state, {
      loading: true, 
      movie: null,
      actors: null});
    case actionTypes.FETCH_CREDITS_SUCCESS: return updateObject(state, {
      loading: false,
      actors: action.actors,
      directors: action.directors
    });
    case actionTypes.FETCH_CREDITS_FAIL: return updateObject(state,{error: action.error, loading: false});
    default: return state;
  }
}
export default homeReducer;