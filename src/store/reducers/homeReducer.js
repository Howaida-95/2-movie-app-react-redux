import * as actionTypes from '../actions/actionTypes';
import { updateObject } from './../../utility/helper';
const initialState = {
  movies: [],
  mainImage: null,
  loading: false,
  error: false,
  currentPage: 0,
  totalPages: 0,
  movieId: null,
  movieName: null
}
const homeReducer = (state = initialState, action) => {
  switch (action.type) {
/* ------------------------------ fetch popular movies ----------------------- */
    case actionTypes.FETCH_POPULAR_MOVIES_START: return updateObject(state, {loading: true, movies: [],});
    case actionTypes.FETCH_POPULAR_MOVIES_SUCCESS: return {
      ...state,

      movies: [...state.movies, ...action.results], // merge 2 arrays
      // here we only load one so check if this one exist , so if it is not exist just load the first movie in results
      mainImage: state.mainImage || action.mainImage,
      loading: false, // because now we don't fetch any data any more 
      currentPage: action.currentPage,
      totalPages: action.totalPages
    };
    case actionTypes.FETCH_POPULAR_MOVIES_FAIL: return updateObject(state,{error: action.error, loading: false});

/* ------------------------------ load more items ------------------------------- */
    case actionTypes.LOAD_MORE_ITEMS_START: return updateObject(state, {loading: true});
    case actionTypes.LOAD_MORE_ITEMS_SUCCESS: return {
      ...state,
      movies: [...state.movies, ...action.results], // merge 2 arrays
      loading: false, // because now we don't fetch any data any more 
      mainImage: state.mainImage || action.mainImage,
      currentPage: action.currentPage,
      totalPages: action.totalPages
    };
    case actionTypes.LOAD_MORE_ITEMS_FAIL: return updateObject(state,{error: action.error, loading: false});

/* ---------------------------- search items items  ---------------------------- */   
    case actionTypes.SEARCH_ITEMS_START: return updateObject(state, 
      {loading: true,
      movies: [],
    });
    case actionTypes.SEARCH_ITEMS_SUCCESS: return {
      ...state,
      movies: [...state.movies, ...action.results], // merge 2 arrays
      loading: false, // because now we don't fetch any data any more 
      mainImage: state.mainImage || action.mainImage,
      currentPage: action.currentPage,
      totalPages: action.totalPages
    };
    case actionTypes.SEARCH_ITEMS_FAIL: return updateObject(state,{error: action.error, loading: false});
    
/* ---------------------------- get movieInfo  ---------------------------------- */
    case actionTypes.GET_MOVIE_INFO: return updateObject(state, {
      movieId: action.movieId,
      movieName: action.movieName
    })
    default: return state;
  }
}
export default homeReducer;