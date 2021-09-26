import React from 'react';

class Header extends React.Component {
  state = {
    'Page title': 'My Stocks'
  }

  render() {
    return (
      <header>
        <h1>{this.state['Page title']}</h1>
      </header>
    );
  }
}

export default Header;