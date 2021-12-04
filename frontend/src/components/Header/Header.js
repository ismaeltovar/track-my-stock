import React from 'react';
import { NavLink } from "react-router-dom";
import './Header.css';

export default function Header(props) {

  return (
    <header>
      <h1 id="pg-title">{props.pgTitle}</h1>
      <nav class="navbar-nav">
        <ul>
          <li>
            <NavLink className="nav-item active" to="/my-stocks">My Stocks</NavLink>
          </li>
          <li>
            <NavLink className="nav-item" to="/market">Market</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}