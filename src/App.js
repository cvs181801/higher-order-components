import './App.css';
import React, {Component} from 'react'
import FavoriteNumber from './components/FavoriteNumber';
import {WithNumberGenerator} from './components/WithNumberGenerator';

const EnhancedNumber = WithNumberGenerator(FavoriteNumber)

class App extends Component {
  constructor() {
    super();
    this.state = {
      num: 0
    }
  }

  render() {
      return (
        <div className="App">
          <EnhancedNumber />
        
        </div>
      )
    }
}

export default App;
