import React from 'react';
import './footer.css';

function Footer(props) {
  return ( 
    <footer>
      <p id="copyright-notice">Copyright 2021 {props.appCreator}</p>
    </footer>
  );
}

export default Footer;