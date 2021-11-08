import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import App from './App';
import { Provider } from 'react-redux';

const defaultState = {
  movies:[
    {
        imdbID: 'tt3896198',
        Title: "Guardians of the Galaxy Vol. 2",
        Year: 2017,
        Poster: "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg"

    },
    {
        imdbID: 'tt0068646',
        Title: "The Godfather",
        Year: 1972,
        Poster: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"

    }],
  movieList: {
    title: "example",
    movies: []
  },
  id:"",
  flag:false
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "FETCH_MOVIES":
      return{...state, movies: action.payload }
    case "FAV_MOVIES":
      return{...state, movieList: {...state.movieList, movies: action.movieList} }
    case "FAV_TITLE":
      return{...state, movieList: {...state.movieList, title: action.title} }
    case "FAV_ID":
      return{...state, id:action.id}
    case "FLAG":
      return{...state, flag:action.flag}
    default:
      return state
  }
}

const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App store={store} />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
