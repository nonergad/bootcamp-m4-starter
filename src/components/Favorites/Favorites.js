import React, { Component } from 'react';
import './Favorites.css';
import {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { Link } from 'react-router-dom';


function Favorites (props) {

    const dispatch = useDispatch();
    const movl = useSelector(state => state.movieList);
    const movlArr = movl.movies;
    const id = useSelector(state => state.id);
    const flag = useSelector(state => state.flag);

    const saveList = (e) => {
        dispatch({type: "FLAG", flag: !flag})
        const test = {title: movl.title, movies:[]}
        movlArr.forEach(element => {
            test.movies.push(element.imdbID);
        });
        fetch('https://acb-api.algoritmika.org/api/movies/list', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(test)
        })
        .then(res => res.json())
        .then(data => dispatch({type: "FAV_ID", id: data.id}))
    }

    const saveListTitle = (e) => {
        dispatch({type:"FAV_TITLE", title: e.target.value});
    }

        return (
            <div className="favorites">
                <input className="favorites__name" placeholder="Новый список" onChange={saveListTitle}/>
                <ul className="favorites__list">
                    {movlArr.map((item) => {
                        return <li key={item.imdbID}>{item.Title} ({item.Year})</li>;
                    })}
                </ul>

                {
                    flag
                    ?   <Link to={`/list/${id}`}>
                            Список фильмов
                        </Link>
                    :   <button type="button" className="favorites__save" onClick={saveList}>Сохранить список</button>
                }
                   
            </div>
        );
    }
 
export default Favorites;