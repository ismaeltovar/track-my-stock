import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import MyStocks from '../MyStocks/MyStocks';
import Market from '../Market/Market';
import Drawer from '../Drawer/Drawer';
import './App.css';
import { getLocalStorageData } from '../../storageMethods';

export let appPages = [
  {name: 'My Stocks', url: '/mystocks'},
  {name: 'Market', url: '/market'}
];

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDrawerBool: false,
      selectedPage: appPages[0]
    }
  }

  showDrawer = () => this.setState({showDrawerBool: true});

  hideDrawer = () => this.setState({showDrawerBool: false});

  setSelectedPage = (pageToSet) => this.setState({showDrawerBool: false, selectedPage: appPages.find(page => page.name === pageToSet)});

  render() {
    return (
      <div id="app">
        <Header showDrawerClick={this.showDrawer} pgTitle={this.state.selectedPage.name}/>
        {this.state.selectedPage.name === 'My Stocks' ? <MyStocks /> : <Market />}
        {this.state.showDrawerBool && <Drawer hideDrawerClick={this.hideDrawer} navLinkClick={this.setSelectedPage} />}
        <Footer appCreator="Ismael Tovar"/>
      </div>
    );
  }
}
