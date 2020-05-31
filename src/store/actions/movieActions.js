import * as actionTypes from './actionTypes';
import axios from 'axios';
import {API_URL, API_KEY} from '../../utility/config';
/* ---------------------------- fetch specific movie ----------------------- */
export const fetchMovieStart = () => {
  return{
    type: actionTypes.FETCH_Movie_START
  }
}
export const fetchMovieSuccess = (data) => {
  return{
    type: actionTypes.FETCH_Movie_SUCCESS,
    movie : data
  }
}
export const fetchMovieFail = (error) => {
  return{
    type: actionTypes.FETCH_Movie_START,
    error: error
  }
}
export const fetchMovie = (movieId) => {
  return dispatch => {
    dispatch(fetchMovieStart());
    const endpoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`;
    axios.get(endpoint)
      .then(response => {
        dispatch(fetchMovieSuccess(response.data))
      })
      .catch(error => {
        dispatch(fetchMovieFail(error))
      })
  }
}
/* ---------------------------- fetch movie credits ----------------------- */
export const fetchCreditsStart = () => {
  return{
    type: actionTypes.FETCH_CREDITS_START
  }
}
export const fetchCreditSSuccess = (data) => {
  return{
    type: actionTypes.FETCH_CREDITS_SUCCESS,
    directors : data.crew.filter(member => member.job === "Director"),
    actors: data.cast
  }
}
export const fetchCreditSFail = (error) => {
  return{
    type: actionTypes.FETCH_CREDITS_FAIL,
    error: error
  }
}
export const fetchCreditS = (movieId) => {
  return dispatch => {
    dispatch(fetchCreditsStart());
    const endpoint = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`;
    axios.get(endpoint)
      .then(response => {
        dispatch(fetchCreditSSuccess(response.data))
      })
      .catch(error => {
        dispatch(fetchCreditSFail(error))
      })
  }
}
