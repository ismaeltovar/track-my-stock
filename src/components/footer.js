import React from 'react';

function Footer(props) {
  return ( 
    <footer>
      <p id="copyright-notice">Copyright 2021 {props.appCreator}</p>
    </footer>
  );
}

export default Footer;