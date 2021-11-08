import React, { Component } from 'react';
import MovieItem from '../MovieItem/MovieItem';
import './Movies.css';
import {useState} from 'react'
import {  useSelector } from 'react-redux';

function Movies ()  {
    let movies = useSelector(state => state.movies)
    
        return ( 
            <ul className="movies">
                {movies.map((movie) => (
                    <li className="movies__item" key={movie.imdbID}>
                        <MovieItem {...movie} />
                    </li>
                ))}
            </ul>
        );
    }
 
export default Movies;