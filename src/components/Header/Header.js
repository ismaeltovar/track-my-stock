import React, { useState } from 'react';
import './Header.css';

function Header() {
  const [pgTitle, setPgTitle] = useState('My Stocks');

  return (
    <header>
      <h1 id="pg-title">{pgTitle}</h1>
    </header>
  );
}

export default Header;