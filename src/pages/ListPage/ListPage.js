import React, { Component } from 'react';
import './ListPage.css';
import { useDispatch, useSelector } from 'react-redux';
class  ListPage extends Component {
    state = {
        movies:[]
    }
    componentDidMount() {
        const newStore = this.props.store.getState()
        fetch(`https://acb-api.algoritmika.org/api/movies/list/${newStore.id}`)
        .then(res => res.json())
        .then(data => data.movies.forEach(element => {
            fetch(`http://www.omdbapi.com/?i=${element}&apikey=8ddfbbdf`)
            .then(resp => resp.json())
            .then(answ => {
                this.setState({movies: [...this.state.movies, answ]})
            })
        }))    
    }
    render() {
        return (
            <div className="list-page">
                <h1 className="list-page__title">{this.props.store.getState().movieList.title}</h1>
                <ul>
                    {this.state.movies.map((item) => {
                        return (
                            <li key={item.imdbID}>
                                <a href={`https://www.imdb.com/title/${item.imdbID}/`} target="_blank">{item.Title} ({item.Year})</a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
    }
 
export default ListPage;