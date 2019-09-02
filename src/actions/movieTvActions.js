import axios from "axios";
import {
  GET_MOVIE_GENRES,
  GET_TV_GENRES,
  GET_MOVIES_BY_GENRE,
  GET_TVS_BY_GENRE,
  GET_MOVIE_LATEST,
  GET_MOVIE_UPCOMING,
  GET_TRENDING_MOVIES,
  START_FETCH,
  END_FETCH,
  CLEAR_RESULTS
} from "./actionTypes";

export const getMoviesGenres = () => {
  return async dispatch => {
    try {
      dispatch({ type: CLEAR_RESULTS });
      dispatch({ type: START_FETCH });
      await delay(1000);
      const response = await axios.get(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=d3de272397bb7105279e2c887f31f0bb&language=en-US"
      );
      dispatch({ type: GET_MOVIE_GENRES, payload: response.data.genres });
      dispatch({ type: END_FETCH });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getTvsGenres = () => {
  return async dispatch => {
    try {
      dispatch({ type: CLEAR_RESULTS });
      dispatch({ type: START_FETCH });
      await delay(1000);
      const response = await axios.get(
        "https://api.themoviedb.org/3/genre/tv/list?api_key=d3de272397bb7105279e2c887f31f0bb&language=en-US"
      );
      dispatch({ type: GET_TV_GENRES, payload: response.data.genres });
      dispatch({ type: END_FETCH });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getMoviesbyGenre = genreId => {
  return async dispatch => {
    try {
      dispatch({ type: CLEAR_RESULTS });
      dispatch({ type: START_FETCH });
      await delay(1000);
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=d3de272397bb7105279e2c887f31f0bb&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&with_genres=${genreId}`
      );
      dispatch({ type: GET_MOVIES_BY_GENRE, payload: response.data.results });
      dispatch({ type: END_FETCH });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getTvsbyGenre = genreId => {
  return async dispatch => {
    try {
      dispatch({ type: CLEAR_RESULTS });
      dispatch({ type: START_FETCH });
      await delay(1000);
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/tv?api_key=d3de272397bb7105279e2c887f31f0bb&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=${genreId}&include_null_first_air_dates=false`
      );
      dispatch({ type: GET_TVS_BY_GENRE, payload: response.data.results });
      dispatch({ type: END_FETCH });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getLatestMovies = () => {
  return async dispatch => {
    try {
      dispatch({ type: CLEAR_RESULTS });
      dispatch({ type: START_FETCH });
      await delay(1000);
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=d3de272397bb7105279e2c887f31f0bb&language=en-US&page=1&region=US`
      );
      dispatch({ type: GET_MOVIE_LATEST, payload: response.data.results });
      dispatch({ type: END_FETCH });
    } catch (error) {
      console.log(error);
    }
  };
};
export const getUpcomingMovies = () => {
  return async dispatch => {
    try {
      dispatch({ type: CLEAR_RESULTS });
      dispatch({ type: START_FETCH });
      await delay(1000);
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=d3de272397bb7105279e2c887f31f0bb&language=en-US&page=1&region=US`
      );
      dispatch({ type: GET_MOVIE_UPCOMING, payload: response.data.results });
      dispatch({ type: END_FETCH });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getTrendingMovies = () => {
  return async dispatch => {
    try {
      dispatch({ type: CLEAR_RESULTS });
      dispatch({ type: START_FETCH });
      await delay(1000);
      const response = await axios.get(
        `https://api.themoviedb.org/3/trending/movie/week?api_key=d3de272397bb7105279e2c887f31f0bb`
      );
      dispatch({ type: GET_TRENDING_MOVIES, payload: response.data.results });
      dispatch({ type: END_FETCH });
    } catch (error) {
      console.log(error);
    }
  };
};
export const clearResults = () => {
  return dispatch => {
    dispatch({ type: CLEAR_RESULTS });
  };
};

const delay = ms => {
  return new Promise(resolve => setTimeout(resolve, ms));
};
