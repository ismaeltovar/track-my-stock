import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import UsrStockList from './components/UsrStockList/UsrStockList';
import UsrStockGraph from './components/UsrStockGraph/UsrStockGraph';
import './App.css';

export let appPages = [
  {name: 'My Stocks', url: ''},
  {name: 'Market', url: ''}
];

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPage: appPages.find(page => 'My Stocks')
    }
  }
  
render() {

  return (
    <div id="app">
      <Header pgTitle={this.state.selectedPage.name}/>
      <Body selectedPage={this.state.selectedPage.name}/>
      <Footer appCreator="Ismael Tovar"/>
    </div>
    );
  }
}