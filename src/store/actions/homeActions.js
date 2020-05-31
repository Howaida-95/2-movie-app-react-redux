import * as actionTypes from './actionTypes';
import axios from 'axios';
import {API_URL, API_KEY} from '../../utility/config';
/* ---------------------------- fetch popular movies ---------------------------- */
export const fetchPopularMoviesStart = () => {
  return {
    type: actionTypes.FETCH_POPULAR_MOVIES_START
  }  
}
export const fetchPopularMoviesSuccess = (data) => {
  return {
    type: actionTypes.FETCH_POPULAR_MOVIES_SUCCESS,
    results: data.results,
    mainImage: data.results[0],
    currentPage: data.page,
    totalPages: data.total_pages,
  }  
}
export const fetchPopularMoviesFail = (error) => {
  return {
    type: actionTypes.FETCH_POPULAR_MOVIES_FAIL,
    error: error
  }  
}
export const fetchPopularMovies= () => {
  return dispatch => {
    dispatch(fetchPopularMoviesStart());
    const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;        
    axios.get(endpoint)
      .then( response => {
        localStorage.setItem('popularMovies',response.data)
        dispatch(fetchPopularMoviesSuccess(response.data));
      } )
      .catch( error => {
        dispatch(fetchPopularMoviesFail(error)); 
      } );
    }
}
/* ---------------------------- load more items  ------------------------------- */
export const loadMoreItemsStart = () => {
  return {
    type: actionTypes.LOAD_MORE_ITEMS_START
  }  
}
export const loadMoreItemsSuccess = (data) => {
  return {
    type: actionTypes.LOAD_MORE_ITEMS_SUCCESS,
    results: data.results,
    currentPage: data.page,
    totalPages: data.total_pages
  }  
}
export const loadMoreItemsFail = (error) => {
  return {
    type: actionTypes.LOAD_MORE_ITEMS_FAIL,
    error: error
  }  
}
export const loadMoreItems= (searchValue,currentPage) => {// this method will fetch the next page when we press load more button 
  return dispatch => {
    dispatch(loadMoreItemsStart());
    let endpoint = ' ';
    if (searchValue === '') {
      endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${currentPage + 1}`;
    } else {
      endpoint = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${searchValue}&page=${currentPage + 1}`;
    }     
    axios.get(endpoint)
      .then( response => {
        dispatch(loadMoreItemsSuccess(response.data));
      } )
      .catch( error => {
        dispatch(loadMoreItemsFail(error)); 
      } );
    }
}
/* ---------------------------- search items  ---------------------------------- */
export const searchItemsStart = (data) => {
  return {
    type: actionTypes.SEARCH_ITEMS_START,
  }  
}
export const searchItemsSuccess = (data) => {
  return {
    type: actionTypes.SEARCH_ITEMS_SUCCESS,
    results: data.results,
    currentPage: data.page,
    totalPages: data.total_pages
  }  
}
export const searchItemsFail = (error) => {
  return {
    type: actionTypes.SEARCH_ITEMS_FAIL,
    error: error
  }  
}
export const searchItems = (searchValue) => {// this method will fetch the next page when we press load more button 
  return dispatch => {
    dispatch(searchItemsStart());
    let endpoint;
    if (!searchValue) {
      endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;        
    } else {
      endpoint = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${searchValue}`;
    }  
    axios.get(endpoint)
      .then( response => {
        dispatch(searchItemsSuccess(response.data));
      } )
      .catch( error => {
        dispatch(searchItemsFail(error)); 
      } );
    }
}
/* ---------------------------- get movieInfo  ---------------------------------- */
export const getMovieInfo = (movieId, movieName) => {
  return{
    type: actionTypes.GET_MOVIE_INFO,
    movieId: movieId,
    movieName: movieName
  }
}
