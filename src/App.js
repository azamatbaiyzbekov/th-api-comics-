import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Routes from './config/routes';
import { NavLink } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <>
      <Routes />
      <div className="App">
        <button class="btn home">
          <NavLink className="nav-link" exact to="/home">Home</NavLink>
        </button>

        <button class="btn search">
          <NavLink className="nav-link" exact to="/search">Search</NavLink>
        </button>
       
      </div>
      </>
    );
  }
  
}

export default withRouter(App);
