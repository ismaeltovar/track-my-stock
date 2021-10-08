import React from 'react';
import './Header.css';

export default function Header(props) {

  return (
    <header>
      <button id="drawer-button" onClick={props.showDrawerClick}><i class="bi bi-list"></i></button>
      <h1 id="pg-title">{props.pgTitle}</h1>
    </header>
  );
}