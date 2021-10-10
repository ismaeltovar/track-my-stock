import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Body from './components/Body/Body';
import Drawer from './components/Drawer/Drawer';
import './App.css';

export let appPages = [
  {name: 'My Stocks', url: ''},
  {name: 'Market', url: ''}
];

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDrawerBool: false,
      selectedPage: appPages.find(page => page.name === 'My Stocks')
    }
  }

  showDrawer = () => this.setState({showDrawerBool: true});

  hideDrawer = () => this.setState({showDrawerBool: false});

  setSelectedPage = (pageToSet) => this.setState({showDrawerBool: false, selectedPage: appPages.find(page => page.name === pageToSet)});

  render() {
    return (
      <div id="app">
        <Header showDrawerClick={this.showDrawer} pgTitle={this.state.selectedPage.name}/>
        <Body selectedPage={this.state.selectedPage.name}/>
          {this.state.showDrawerBool && <Drawer hideDrawerClick={this.hideDrawer} navLinkClick={this.setSelectedPage} />}
        <Footer appCreator="Ismael Tovar"/>
      </div>
    );
  }
}
