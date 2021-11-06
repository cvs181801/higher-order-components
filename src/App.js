import './App.css';
import React, {Component} from 'react'
import FavoriteNumber from './components/FavoriteNumber';
import {WithNumberGenerator} from './components/WithNumberGenerator';
import Favorite from './components/Favorite'
import Menu from './components/Menu'

const EnhancedNumber = WithNumberGenerator(FavoriteNumber)

class App extends Component {
  constructor() {
    super();
    this.state = {
      num: 0
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    console.log("clicked")
  }

  render() {
      return (
        <div className="App">
          <EnhancedNumber />
          <Favorite/>
          <Favorite/>
          <Favorite/>
          <Menu/>
        </div>
      )
    }
}

export default App;
