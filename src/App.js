import React, { Component } from 'react'
import './App.css'
import { hot } from 'react-hot-loader'
import Main from './Components/Layout/main'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Main />
      </div>
    )
  }
}

export default hot(module)(App)