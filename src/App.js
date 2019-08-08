import React, { Component } from 'react';
import { BrowserRouter as Router,Route, Link} from 'react-router-dom'

import Recipe from './Components/Recipe/Recipe'
import Todo from './Components/Todo/Todo'

import './App.css'

export default class App extends Component {

  render() {
    return (
      <Router>
      <>
      <h1>Hello this is the home page</h1>
      <div className="links">
        <Link to="/recipes">Recipes</Link>
        <Link to="/todos">Todo</Link>
      </div>


        <Route exact path="/" component={App} />
        <Route path="/recipes" component={Recipe} />
        <Route path="/todos" component={Todo} />

      </>
  </Router>
    )
  }
}
