import React, { Component } from 'react';
import './App.css';
import { withRouter } from 'react-router-dom';
import Routes from './config/routes';
import { NavLink } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <>
      <Routes />
        <div className="App">
          <button class="btn home"><i class="fa fa-home"></i>
            <NavLink className="nav-link" exact to="/home">Home</NavLink>
         </button>

          <button class="btn search"><i class="fa fa-search"></i>
            <NavLink className="nav-link" exact to="/search">Search</NavLink>
          </button>
       
      </div>
      </>
    );
  }
  
}

export default withRouter(App);
