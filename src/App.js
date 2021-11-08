import React from 'react';
import { Route } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import ListPage from './pages/ListPage/ListPage';
import {useDispatch, useSelector} from 'react-redux'

import './reset.css';
import './common.css';

function App(props)  {
    return (
      <div className="app">
        <Route path="/" exact component={MainPage} />
        <Route path="/list/:id" >
          <ListPage store={props.store} />
        </Route>
      </div>
    );
  }

export default App;
