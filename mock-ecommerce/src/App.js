import logo from './logo.svg';
import './App.css';

import React from 'react'
import Home from './Home'
import About from './About'
import { Route, Link } from 'react-router-dom'

const App = () => {
  <div>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
    </ul>

    <hr/>

    <Route exact path="/" component={Home}/>
    <Route path="/about" component={About}/>
  </div>
}
export default App;
