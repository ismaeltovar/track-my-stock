import React from 'react';
import { appPages } from '../../App';
import './Drawer.css';

export default function Drawer(props) {
  return (
    <div id="drawer-container">
      <div id="background-overlay">
      </div>
      <div id="drawer">  
        <button id="close-drawer-btn" onClick={props.hideDrawerClick}><i class="bi bi-x"></i></button>
      </div>
    </div>
  ); 
}