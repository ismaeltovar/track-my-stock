import React from 'react';
import './Footer.css';

function Footer(props) {
  return ( 
    <footer>
      <p id="copyright-notice">Copyright {'\u00A9'} 2021 {props.appCreator}</p>
    </footer>
  );
}

export default Footer;