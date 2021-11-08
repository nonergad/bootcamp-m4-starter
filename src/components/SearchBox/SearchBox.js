import React, { Component } from 'react';
import './SearchBox.css';
import {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';

function SearchBox () {
    const [searchLine, setSearchLine] = useState('');
    const dispatch = useDispatch();
    let test = useSelector(state => state.movies);

    
    const searchLineChangeHandler = (e) => {
        setSearchLine(e.target.value);
    }

    const searchBoxSubmitHandler = (e) => {
        e.preventDefault();
        fetch (`http://www.omdbapi.com/?s=${searchLine}&apikey=8ddfbbdf`)
            .then (res => res.json())
            .then (data => dispatch({type:"FETCH_MOVIES", payload: data.Search}))
            .catch (error => {
                throw(error);
            })
    }

        return (
            <div className="search-box">
                <form className="search-box__form" onSubmit={searchBoxSubmitHandler}>
                    <label className="search-box__form-label">
                        Искать фильм по названию:
                        <input
                            value={searchLine}
                            type="text"
                            className="search-box__form-input"
                            placeholder="Например, Shawshank Redemption"
                            onChange={searchLineChangeHandler}
                        />
                    </label>
                    <button
                        type="submit"
                        className="search-box__form-submit"
                        disabled={!searchLine}
                    >
                        Искать
                    </button>
                </form>
            </div>
        );
    }
 
export default SearchBox;