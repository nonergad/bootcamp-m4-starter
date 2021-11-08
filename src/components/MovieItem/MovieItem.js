import React, { Component } from 'react';
import './MovieItem.css';
import {useDispatch, useSelector} from 'react-redux'

function MovieItem (props) {

    const dispatch = useDispatch();
    const movl = useSelector(state => state.movieList);
    const movlArr = movl.movies;

    const addToList = () => {
        const copyMovList=[...movlArr]
        if (copyMovList.findIndex((element) => JSON.stringify(element) === JSON.stringify(props)) === -1) {
            copyMovList.push(props)
            dispatch({type:"FAV_MOVIES", movieList: copyMovList});
            }
    }

        return (
            <article className="movie-item">
                <img className="movie-item__poster" src={props.Poster} alt={props.Title} />
                <div className="movie-item__info">
                    <h3 className="movie-item__title">{props.Title}&nbsp;({props.Year})</h3>
                    <button type="button" className="movie-item__add-button" onClick={addToList} >Добавить в список</button>
                </div>
            </article>
        );
    }
export default MovieItem;