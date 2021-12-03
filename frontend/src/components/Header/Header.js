import React from 'react';
import { NavLink } from "react-router-dom";
import './Header.css';

export default function Header(props) {

  return (
    <header>
      <h1 id="pg-title">{props.pgTitle}</h1>
      <nav>
        <ul>
          <li className="nav-item">
            <NavLink to="/my-stocks">My Stocks</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/market">Market</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}