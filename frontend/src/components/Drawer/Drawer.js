import React from 'react';
import { appPages } from '../App/App';
import './Drawer.css';

export default function Drawer(props) {
  return (
    <div id="drawer-container">
      <div id="background-overlay">
      </div>
      <div id="drawer">
        <div id="top-of-drawer">
          <button id="close-drawer-btn" onClick={props.hideDrawerClick}><i class="bi bi-x"></i></button>
          <img id="drawer-logo" src="./favicon.ico" alt="Logo"></img>
        </div>
        <nav id="links-menu">
          {appPages.map(({name, link}) => {
            return (<button class="page-link" onClick={props.navLinkClick.bind(null, name)}>{name}</button>);
          })}
        </nav>
      </div>
    </div>
  );
}