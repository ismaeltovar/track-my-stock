import React from 'react';
import './Header.css';

export default function Header(props) {

  return (
    <header>
      <h1 id="pg-title">{props.pgTitle}</h1>
    </header>
  );
}