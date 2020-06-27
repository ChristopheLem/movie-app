import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

export default class Header extends Component {

  render() {
    return (
      <header className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink className="navbar-brand" to="/films">AlloMovie</NavLink>
        <button className="navbar-toggler">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/films" activeClassName="active">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/favoris" activeClassName="active">Favoris</NavLink>
            </li>
          </ul>
        </div>
      </header>
    );
  }

}